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

  // 시간 설정(ms)
  var FILL_TIME = 1000;    // 준비가 빨리 끝나도 0 → 100은 이 시간에 걸쳐 올라간다
  var HOLD_TIME = 180;     // 100%를 잠깐 보여 준 뒤 넘어간다
  var MAX_STEP = 2.5;      // 한 Frame에 올라갈 수 있는 최대 폭(준비가 늦게 끝나도 튀지 않게)
  var SAFETY_TIME = 7000;  // 무언가 끝나지 않아도 이 시간 뒤에는 넘어간다

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var target = 30;   // 실제 준비 상태가 허락하는 진행률. 여기까지 왔다면 HTML은 다 읽은 상태다
  var shown = 0;     // 화면에 보이는 진행률. 줄어들지 않는다.
  var startTime = null;

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

  window.setTimeout(function () { raiseTarget(100); }, SAFETY_TIME);

  function render() {
    var percent = Math.floor(shown);
    value.textContent = percent + '%';
    bar.style.transform = 'scaleX(' + shown / 100 + ')';
  }

  // 시간에 따른 진행률: 처음엔 조금 빠르고 끝으로 갈수록 완만해진다(끝에서 멈춘 듯 보이지 않을 정도로만)
  function timeProgress(elapsed) {
    var t = Math.min(1, elapsed / FILL_TIME);
    return (1 - Math.pow(1 - t, 1.5)) * 100;
  }

  function tick(now) {
    if (startTime === null) startTime = now;

    if (reduceMotion) {
      // 움직임을 줄이는 환경: 기다리게 하지 않고 준비되는 대로 넘어간다
      shown = target;
    } else {
      // 시간이 허락하는 값과 실제 준비 상태가 허락하는 값 중 작은 쪽까지만 올라간다.
      // 준비가 늦으면 거기서 기다리고, 준비가 빨라도 FILL_TIME보다 빨리 차지 않는다.
      var allowed = Math.min(timeProgress(now - startTime), target);
      shown = Math.max(shown, Math.min(allowed, shown + MAX_STEP));
    }
    render();

    if (shown >= 100) {
      window.setTimeout(finish, reduceMotion ? 0 : HOLD_TIME);
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
