// Browser QA — docs/를 로컬 서버로 띄우고 Desktop · Tablet · Mobile에서 Render해
// 스크린샷과 측정값(가로 Overflow, Console Error, 실패 Request, JS 비활성 Render 등)을 남긴다.
//
//   node scripts/qa/capture.cjs --check                 도구가 실제로 동작하는지만 확인
//   node scripts/qa/capture.cjs                         docs/의 모든 *.html
//   node scripts/qa/capture.cjs --pages index.html      특정 Page만(쉼표로 여러 개)
//   node scripts/qa/capture.cjs --label hero-pass1      결과 폴더 이름
//   node scripts/qa/capture.cjs --url https://…/        배포된 사이트 검사(Live QA)
//
// 결과: qa/screenshots/<label>/ 에 PNG와 report.json (git 미추적)
// 종료 코드: 0 = 측정상 문제 없음, 1 = 문제 발견, 2 = 도구 사용 불가(BLOCKER)
//
// Playwright를 새로 설치하지 않는다. 이미 있는 것을 찾아 쓰고, 없으면 종료 코드 2로 끝난다.

const fs = require('fs');
const path = require('path');
const { startServer, readConfigValue, ROOT, DOCS } = require('./serve.cjs');

// laptop은 선택 Viewport다. config/project.yaml의 viewports에 laptop이 있을 때만 검사한다.
const VIEWPORT_HEIGHT = { desktop: 900, laptop: 900, tablet: 1024, mobile: 844 };
const VIEWPORT_DEFAULT_WIDTH = { desktop: 1440, laptop: null, tablet: 768, mobile: 390 };

function parseArgs(argv) {
  const args = { check: false, pages: null, label: null, url: null };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--check') args.check = true;
    else if (argv[i] === '--pages') args.pages = argv[++i].split(',').map((p) => p.trim());
    else if (argv[i] === '--label') args.label = argv[++i];
    else if (argv[i] === '--url') args.url = argv[++i];
  }
  return args;
}

function getViewports() {
  return Object.keys(VIEWPORT_DEFAULT_WIDTH)
    .map((name) => {
      const width = Number(readConfigValue(name)) || VIEWPORT_DEFAULT_WIDTH[name];
      // 1920 이상 Desktop은 16:9 화면(1080 높이)을 기준으로 첫 화면을 본다.
      const height = name === 'desktop' && width >= 1920 ? 1080 : VIEWPORT_HEIGHT[name];
      return { name, width, height };
    })
    .filter((viewport) => viewport.width);
}

// 이미 설치된 Playwright를 찾는다: 환경 변수 → 일반 require → npx 캐시.
function findPlaywright() {
  const candidates = [];
  if (process.env.PLAYWRIGHT_PATH) candidates.push(process.env.PLAYWRIGHT_PATH);
  candidates.push('playwright');
  const npxCache = path.join(process.env.LOCALAPPDATA || '', 'npm-cache', '_npx');
  if (fs.existsSync(npxCache)) {
    for (const dir of fs.readdirSync(npxCache)) {
      candidates.push(path.join(npxCache, dir, 'node_modules', 'playwright'));
    }
  }
  for (const candidate of candidates) {
    try {
      return { playwright: require(candidate), source: candidate };
    } catch {
      // 다음 후보로
    }
  }
  return null;
}

// 설치된 Chrome → Edge → Playwright 번들 Chromium 순으로 시도한다.
async function launchBrowser(playwright) {
  const errors = [];
  for (const channel of ['chrome', 'msedge', undefined]) {
    try {
      const browser = await playwright.chromium.launch(channel ? { channel } : {});
      return { browser, channel: channel || 'bundled-chromium' };
    } catch (error) {
      errors.push((channel || 'bundled') + ': ' + String(error.message).split('\n')[0]);
    }
  }
  throw new Error(errors.join(' | '));
}

function blocker(message) {
  console.error('BLOCKER(tool): ' + message);
  console.error('새 Package를 설치하지 말고 Level 3 Blocker로 보고한다.');
  process.exit(2);
}

// Browser 안에서 실행되는 측정. Checklist 중 기계적으로 셀 수 있는 것만 본다.
function measurePage() {
  const doc = document.documentElement;
  const isRootAbsolute = (value) => typeof value === 'string' && value.startsWith('/') && !value.startsWith('//');
  const images = Array.from(document.images);
  return {
    scrollWidth: doc.scrollWidth,
    clientWidth: doc.clientWidth,
    title: document.title,
    lang: doc.getAttribute('lang'),
    hasViewportMeta: !!document.querySelector('meta[name="viewport"]'),
    hasDescription: !!document.querySelector('meta[name="description"]'),
    h1Count: document.querySelectorAll('h1').length,
    mainCount: document.querySelectorAll('main').length,
    imagesWithoutAlt: images.filter((img) => !img.hasAttribute('alt')).map((img) => img.getAttribute('src')),
    imagesWithoutSize: images.filter((img) => !img.hasAttribute('width') || !img.hasAttribute('height')).map((img) => img.getAttribute('src')),
    brokenImages: images.filter((img) => img.complete && img.naturalWidth === 0).map((img) => img.getAttribute('src')),
    stillLoading: doc.classList.contains('is-loading'),
    rootAbsolutePaths: Array.from(document.querySelectorAll('[href], [src]'))
      .map((el) => el.getAttribute('href') || el.getAttribute('src'))
      .filter(isRootAbsolute),
    inlineStyleCount: document.querySelectorAll('[style]').length,
    textLength: document.body ? document.body.innerText.trim().length : 0,
  };
}

// Loading 상태(<html class="is-loading">)가 끝나고 진행 중인 Transition/Animation이 끝날 때까지 기다린다.
// 최종 화면을 찍기 위한 것이며, 8초 안에 끝나지 않으면 그대로 진행한다(측정에서 드러난다).
async function waitUntilSettled(page) {
  try {
    await page.waitForFunction(() => !document.documentElement.classList.contains('is-loading'), null, { timeout: 8000 });
    await page.evaluate(() => Promise.all(document.getAnimations().map((animation) => animation.finished.catch(() => {}))));
  } catch {
    // 시간 초과: 아래 측정과 스크린샷에 그 상태가 남는다
  }
  await page.waitForTimeout(200);
}

async function capturePage(browser, baseUrl, pageFile, viewport, outDir) {
  const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
  const page = await context.newPage();
  const consoleErrors = [];
  const failedRequests = [];
  let transferBytes = 0;
  let requestCount = 0;

  page.on('console', (message) => { if (message.type() === 'error') consoleErrors.push(message.text()); });
  page.on('pageerror', (error) => consoleErrors.push(String(error.message)));
  page.on('requestfailed', (request) => failedRequests.push(request.url() + ' — ' + (request.failure() || {}).errorText));
  page.on('response', async (response) => {
    requestCount++;
    if (response.status() >= 400) failedRequests.push(response.url() + ' — HTTP ' + response.status());
    try { transferBytes += (await response.body()).length; } catch { /* Redirect 등 Body 없음 */ }
  });

  const url = new URL(pageFile === 'index.html' ? '' : pageFile, baseUrl).href;
  await page.goto(url, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts && document.fonts.ready);
  await waitUntilSettled(page);

  const name = pageFile.replace(/\.html$/, '').replace(/[\\/]/g, '_') + '-' + viewport.name;
  await page.screenshot({ path: path.join(outDir, name + '-fold.png') });
  await page.screenshot({ path: path.join(outDir, name + '-full.png'), fullPage: true });

  const measured = await page.evaluate(measurePage);
  await context.close();

  return {
    page: pageFile,
    viewport: viewport.name,
    width: viewport.width,
    url,
    horizontalOverflow: measured.scrollWidth > measured.clientWidth,
    consoleErrors,
    failedRequests,
    requestCount,
    transferKB: Math.round(transferBytes / 1024),
    ...measured,
  };
}

// JavaScript를 끈 상태에서도 콘텐츠가 보이는지 확인한다(Mobile 폭 1회).
async function captureNoJs(browser, baseUrl, pageFile, viewport, outDir) {
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    javaScriptEnabled: false,
  });
  const page = await context.newPage();
  const url = new URL(pageFile === 'index.html' ? '' : pageFile, baseUrl).href;
  await page.goto(url, { waitUntil: 'load' });
  const name = pageFile.replace(/\.html$/, '').replace(/[\\/]/g, '_') + '-' + viewport.name + '-nojs';
  await page.screenshot({ path: path.join(outDir, name + '-full.png'), fullPage: true });
  const textLength = (await page.locator('body').innerText()).trim().length;
  await context.close();
  return { page: pageFile, viewport: viewport.name, textLength };
}

function summarize(result) {
  const problems = [];
  if (result.stillLoading) problems.push('Loading 상태가 끝나지 않음(is-loading)');
  if (result.horizontalOverflow) problems.push('가로 Overflow (scrollWidth ' + result.scrollWidth + ' > ' + result.clientWidth + ')');
  if (result.consoleErrors.length) problems.push('Console Error ' + result.consoleErrors.length + '건');
  if (result.failedRequests.length) problems.push('실패 Request ' + result.failedRequests.length + '건');
  if (result.brokenImages.length) problems.push('깨진 이미지 ' + result.brokenImages.length + '건');
  if (result.rootAbsolutePaths.length) problems.push('Root-absolute 경로 ' + result.rootAbsolutePaths.length + '건');
  if (result.h1Count !== 1) problems.push('h1 ' + result.h1Count + '개');
  if (result.mainCount !== 1) problems.push('main ' + result.mainCount + '개');
  if (!result.lang) problems.push('html lang 없음');
  if (!result.hasViewportMeta) problems.push('viewport meta 없음');
  if (!result.title) problems.push('title 없음');
  if (result.imagesWithoutAlt.length) problems.push('alt 없는 이미지 ' + result.imagesWithoutAlt.length + '건');
  return problems;
}

async function main() {
  const args = parseArgs(process.argv);

  const found = findPlaywright();
  if (!found) blocker('Playwright Module을 찾지 못했다(PLAYWRIGHT_PATH, node_modules, npx 캐시 확인).');

  let launched;
  try {
    launched = await launchBrowser(found.playwright);
  } catch (error) {
    blocker('Browser를 실행하지 못했다 — ' + error.message);
  }
  const { browser, channel } = launched;

  if (args.check) {
    const version = browser.version();
    await browser.close();
    console.log(JSON.stringify({ ok: true, playwright: found.source, browser: channel, browserVersion: version, node: process.version }, null, 2));
    return;
  }

  let server = null;
  let baseUrl = args.url;
  if (!baseUrl) {
    if (!fs.existsSync(DOCS)) blocker('docs/ 디렉터리가 없다.');
    const started = await startServer();
    server = started.server;
    baseUrl = started.url;
  }
  if (!baseUrl.endsWith('/')) baseUrl += '/';

  const pages = args.pages || fs.readdirSync(DOCS).filter((file) => file.endsWith('.html')).sort();
  if (pages.length === 0) {
    await browser.close();
    if (server) server.close();
    blocker('검사할 HTML Page가 없다(docs/*.html).');
  }

  const label = args.label || new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const outDir = path.join(ROOT, 'qa', 'screenshots', label);
  fs.mkdirSync(outDir, { recursive: true });

  const viewports = getViewports();
  const results = [];
  const noJs = [];
  let problemCount = 0;

  for (const pageFile of pages) {
    for (const viewport of viewports) {
      const result = await capturePage(browser, baseUrl, pageFile, viewport, outDir);
      result.problems = summarize(result);
      problemCount += result.problems.length;
      results.push(result);
      console.log((result.problems.length ? 'FAIL ' : 'ok   ') + pageFile + ' @ ' + viewport.name + ' ' + viewport.width
        + ' — ' + result.transferKB + 'KB, ' + result.requestCount + ' requests'
        + (result.problems.length ? '\n       ' + result.problems.join('\n       ') : ''));
    }
    const mobile = viewports.find((viewport) => viewport.name === 'mobile');
    const noJsResult = await captureNoJs(browser, baseUrl, pageFile, mobile, outDir);
    noJs.push(noJsResult);
    if (noJsResult.textLength === 0) {
      problemCount++;
      console.log('FAIL ' + pageFile + ' — JavaScript 비활성 시 본문 텍스트 없음');
    }
  }

  await browser.close();
  if (server) server.close();

  const report = { label, baseUrl, browser: channel, generatedAt: new Date().toISOString(), viewports, results, noJs };
  fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 2));
  console.log('\n스크린샷과 report.json: ' + path.relative(ROOT, outDir));
  console.log('측정상 문제 ' + problemCount + '건. 스크린샷을 직접 열어 Visual QA를 수행해야 PASS를 판정할 수 있다.');
  process.exit(problemCount ? 1 : 0);
}

main().catch((error) => {
  console.error('QA Script 오류: ' + (error.stack || error.message));
  process.exit(2);
});
