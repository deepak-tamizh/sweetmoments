/* ==========================================================================
   Sweet Moments — Cart page interactions
   ========================================================================== */
(function () {
  document.querySelectorAll('.cart-item .qty-stepper').forEach(function (stepper) {
    var display = stepper.querySelector('span');
    var buttons = stepper.querySelectorAll('button');
    var qty = parseInt(display.textContent, 10) || 1;
    buttons[0].addEventListener('click', function () {
      qty = Math.max(1, qty - 1);
      display.textContent = qty;
    });
    buttons[1].addEventListener('click', function () {
      qty = qty + 1;
      display.textContent = qty;
    });
  });

  document.querySelectorAll('.cart-item-remove').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.cart-item');
      if (item) item.remove();
    });
  });
})();
