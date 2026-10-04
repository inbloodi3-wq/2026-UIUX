// Loading → Cover 전환
// <head>의 한 줄 Script가 <html>에 "is-loading"을 붙여 둔다.
// 여기서는 실제 준비 상태에 맞춰 진행률을 올리고, 100이 되면 "is-loaded"로 바꾼다.
// 이 파일이 실행되지 않아도 CSS가 8초 뒤에 Loading 화면을 걷어 낸다(components.css의 failsafe).

(function () {
  var root = document.documentElement;
  if (!root.classList.contains('is-loading')) return;

  var loader = document.querySelector('[data-loader]');
  var bar = document.querySelector('[data-loader-bar]');
  var value = document.querySelector('[data-loader-value]');

  if (!loader || !bar || !value) {
    finish();
    return;
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var target = 30;   // 여기까지 왔다면 HTML은 다 읽은 상태다
  var shown = 0;     // 화면에 보이는 진행률. 줄어들지 않는다.

  // 준비 단계마다 목표 진행률을 올린다
  function raiseTarget(next) {
    if (next > target) target = next;
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { raiseTarget(70); });
  } else {
    raiseTarget(70);
  }

  // 첫 화면에 꼭 필요한 이미지(data-critical)가 있으면 기다린다. 지금은 없다.
  var criticalImages = Array.prototype.slice.call(document.querySelectorAll('img[data-critical]'));
  Promise.all(criticalImages.map(function (image) {
    return image.decode ? image.decode().catch(function () {}) : Promise.resolve();
  })).then(function () { raiseTarget(90); });

  if (document.readyState === 'complete') {
    raiseTarget(100);
  } else {
    window.addEventListener('load', function () { raiseTarget(100); });
  }

  // 무언가 끝나지 않더라도 4초 뒤에는 넘어간다
  window.setTimeout(function () { raiseTarget(100); }, 4000);

  function render() {
    var percent = Math.floor(shown);
    value.textContent = percent + '%';
    bar.style.transform = 'scaleX(' + shown / 100 + ')';
  }

  function tick() {
    if (reduceMotion) {
      shown = target;
    } else {
      // 목표까지 남은 거리의 일부씩 다가간다. 최소 0.6씩은 움직여 멈춰 보이지 않게 한다.
      shown = Math.min(target, shown + Math.max(0.6, (target - shown) * 0.08));
    }
    render();

    if (shown >= 100) {
      finish();
    } else {
      window.requestAnimationFrame(tick);
    }
  }

  function finish() {
    root.classList.remove('is-loading');
    root.classList.add('is-loaded');
  }

  window.requestAnimationFrame(tick);
})();
