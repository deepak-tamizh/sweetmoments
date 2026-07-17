/* ==========================================================================
   Sweet Moments — Shop filter drawer (mobile)
   ========================================================================== */
(function () {
  var openBtn  = document.querySelector('[data-filter-toggle]');
  var panel    = document.querySelector('[data-filters-panel]');
  var backdrop = document.querySelector('[data-filters-backdrop]');
  var closeBtn = document.querySelector('[data-filters-close]');

  if (!openBtn || !panel) return;

  function open() {
    panel.setAttribute('data-open', 'true');
    backdrop.setAttribute('data-open', 'true');
    document.body.classList.add('nav-open');
  }
  function close() {
    panel.setAttribute('data-open', 'false');
    backdrop.setAttribute('data-open', 'false');
    document.body.classList.remove('nav-open');
  }

  openBtn.addEventListener('click', open);
  closeBtn && closeBtn.addEventListener('click', close);
  backdrop && backdrop.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
