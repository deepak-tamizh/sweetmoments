/* ==========================================================================
   Sweet Moments — Festival Specials tab filter (visual state)
   ========================================================================== */
(function () {
  var tabs = document.querySelectorAll('.fest-tab-btn');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      var target = tab.getAttribute('data-fest');
      if (target && target !== 'all') {
        window.location.href = 'sweets.html?fest=' + target;
      }
    });
  });
})();
