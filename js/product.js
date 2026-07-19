/* ==========================================================================
   Sweet Moments — Product detail page interactions
   ========================================================================== */
(function () {
  // ---- Tabs ----
  var tabBtns = document.querySelectorAll('.pd-tab-btn');
  var panels = document.querySelectorAll('.pd-tab-panel');
  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabBtns.forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      panels.forEach(function (p) { p.classList.remove('active'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      var target = document.getElementById(btn.getAttribute('data-tab'));
      target && target.classList.add('active');
    });
  });

  // ---- Gallery thumbnails ----
  var thumbs = document.querySelectorAll('.pd-thumb');
  var mainImage = document.querySelector('.pd-gallery-main');
  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      thumbs.forEach(function (t) { t.classList.remove('active'); });
      thumb.classList.add('active');
      var svg = thumb.querySelector('svg');
      var mainSvg = mainImage.querySelector('svg');
      if (svg && mainSvg) mainImage.replaceChild(svg.cloneNode(true), mainSvg);
    });
  });

  // ---- Weight pills ----
  var pills = document.querySelectorAll('.pd-weight-pill');
  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      pills.forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');
    });
  });

  // ---- Quantity stepper ----
  var stepper = document.querySelector('.qty-stepper');
  if (stepper) {
    var display = stepper.querySelector('span');
    var buttons = stepper.querySelectorAll('button');
    var qty = 1;
    buttons[0].addEventListener('click', function () {
      qty = Math.max(1, qty - 1);
      display.textContent = qty;
    });
    buttons[1].addEventListener('click', function () {
      qty = qty + 1;
      display.textContent = qty;
    });
  }
})();

console.log("hello")