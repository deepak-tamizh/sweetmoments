/* ==========================================================================
   Sweet Moments — Franchise FAQ accordion
   ========================================================================== */
(function () {
  var items = document.querySelectorAll('.faq-item');
  items.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      items.forEach(function (i) { i.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });
})();
