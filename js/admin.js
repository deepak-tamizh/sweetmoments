/* ==========================================================================
   Sweet Moments — Admin dashboard sidebar toggle (mobile)
   ========================================================================== */
(function () {
  var menuBtn = document.querySelector('[data-admin-menu-btn]');
  var sidebar = document.querySelector('[data-admin-sidebar]');
  var backdrop = document.querySelector('[data-admin-backdrop]');

  if (!menuBtn || !sidebar) return;

  function open() {
    sidebar.setAttribute('data-open', 'true');
    backdrop.setAttribute('data-open', 'true');
    document.body.classList.add('nav-open');
  }
  function close() {
    sidebar.setAttribute('data-open', 'false');
    backdrop.setAttribute('data-open', 'false');
    document.body.classList.remove('nav-open');
  }

  menuBtn.addEventListener('click', open);
  backdrop.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  // ---- Sales Overview chip toggle (visual only) ----
  var chips = document.querySelectorAll('.chip-toggle button');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
    });
  });
})();
