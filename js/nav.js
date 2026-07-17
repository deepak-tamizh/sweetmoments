/* ==========================================================================
   Sweet Moments — Navigation behavior
   Mobile menu drawer + search toggle. Vanilla JS, no dependencies.
   ========================================================================== */
(function () {
  var hamburger   = document.querySelector('[data-hamburger]');
  var mobileNav   = document.querySelector('[data-mobile-nav]');
  var closeBtn    = document.querySelector('[data-mobile-nav-close]');
  var backdrop    = document.querySelector('[data-mobile-nav-backdrop]');
  var searchBtn   = document.querySelector('[data-search-toggle]');
  var searchBar   = document.querySelector('[data-search-bar]');

  function openNav() {
    mobileNav.setAttribute('data-open', 'true');
    document.body.classList.add('nav-open');
    hamburger.setAttribute('aria-expanded', 'true');
  }
  function closeNav() {
    mobileNav.setAttribute('data-open', 'false');
    document.body.classList.remove('nav-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', openNav);
    closeBtn && closeBtn.addEventListener('click', closeNav);
    backdrop && backdrop.addEventListener('click', closeNav);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
  }

  if (searchBtn && searchBar) {
    searchBtn.addEventListener('click', function () {
      var isOpen = searchBar.getAttribute('data-open') === 'true';
      searchBar.setAttribute('data-open', isOpen ? 'false' : 'true');
      if (!isOpen) {
        var input = searchBar.querySelector('input');
        input && input.focus();
      }
    });
  }

  // Highlight current page link
  var links = document.querySelectorAll('.main-nav a, .mobile-nav-links a');
  var path = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
})();
