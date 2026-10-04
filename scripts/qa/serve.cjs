// 로컬 정적 서버 — docs/를 GitHub Pages와 같은 Base Path 아래에서 서빙한다.
// Node 내장 모듈만 사용한다(설치 불필요). 127.0.0.1에만 바인딩한다.
//
//   node scripts/qa/serve.cjs [port]     기본 port 8765, Ctrl+C로 종료
//
// Base Path는 config/project.yaml의 site.base_path에서 읽는다(없으면 "/").

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const DOCS = path.join(ROOT, 'docs');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.pdf': 'application/pdf',
};

// config/project.yaml에서 값 하나를 읽는다. YAML Parser 없이 "key: value" 한 줄만 본다.
function readConfigValue(key) {
  try {
    const text = fs.readFileSync(path.join(ROOT, 'config', 'project.yaml'), 'utf8');
    const match = text.match(new RegExp('^\\s*' + key + ':\\s*["\']?([^"\'#\\r\\n]+)', 'm'));
    return match ? match[1].trim() : null;
  } catch {
    return null;
  }
}

function getBasePath() {
  let base = readConfigValue('base_path') || '/';
  if (!base.startsWith('/')) base = '/' + base;
  if (!base.endsWith('/')) base += '/';
  return base;
}

function startServer({ port = 0, basePath = getBasePath(), docsDir = DOCS } = {}) {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);

    // Base Path 밖의 요청은 404다. Root-absolute 경로("/css/…")가 배포에서 깨지는 것을 그대로 재현한다.
    if (!urlPath.startsWith(basePath)) {
      if (urlPath + '/' === basePath) {
        res.writeHead(301, { Location: basePath });
        return res.end();
      }
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('404 — outside base path ' + basePath);
    }

    let filePath = path.join(docsDir, urlPath.slice(basePath.length));
    if (!filePath.startsWith(docsDir)) {
      res.writeHead(403);
      return res.end();
    }
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }
    if (!fs.existsSync(filePath)) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('404 — ' + urlPath);
    }

    const type = MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-store' });
    fs.createReadStream(filePath).pipe(res);
  });

  return new Promise((resolve, reject) => {
    server.on('error', reject);
    server.listen(port, '127.0.0.1', () => {
      const url = 'http://127.0.0.1:' + server.address().port + basePath;
      resolve({ server, url, basePath });
    });
  });
}

module.exports = { startServer, getBasePath, readConfigValue, ROOT, DOCS };

if (require.main === module) {
  const port = Number(process.argv[2]) || 8765;
  startServer({ port }).then(({ url }) => {
    console.log('Serving docs/ at ' + url + '  (Ctrl+C to stop)');
  }).catch((error) => {
    console.error('Server failed: ' + error.message);
    process.exit(1);
  });
}
