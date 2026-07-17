/* ==========================================================================
   Sweet Moments — Account dashboard interactions
   ========================================================================== */
(function () {
  var copyBtn = document.querySelector('.referral-box .btn');
  var codeEl = document.querySelector('.referral-code');
  if (!copyBtn || !codeEl) return;

  copyBtn.addEventListener('click', function () {
    var text = codeEl.textContent.trim();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(showCopied);
    } else {
      var temp = document.createElement('textarea');
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
      showCopied();
    }
  });

  function showCopied() {
    var original = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    setTimeout(function () { copyBtn.textContent = original; }, 1800);
  }
})();
