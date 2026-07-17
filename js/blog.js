/* ==========================================================================
   Sweet Moments — Blog category pill filter (visual state)
   ========================================================================== */
(function () {
  var pills = document.querySelectorAll('.blog-cat-pill');
  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      pills.forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');
    });
  });
})();
