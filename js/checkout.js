/* ==========================================================================
   Sweet Moments — Checkout page interactions
   Selectable card groups (address, delivery, payment) driven by radio inputs
   ========================================================================== */
(function () {
  function wireGroup(selector) {
    var cards = document.querySelectorAll(selector);
    cards.forEach(function (card) {
      var radio = card.querySelector('input[type="radio"]');
      if (!radio) return;
      radio.addEventListener('change', function () {
        cards.forEach(function (c) { c.classList.remove('selected'); });
        card.classList.add('selected');
      });
    });
  }
  wireGroup('.address-card');
  wireGroup('.delivery-option');
  wireGroup('.payment-option');
})();
