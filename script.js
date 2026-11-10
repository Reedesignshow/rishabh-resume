(function () {
  var button = document.getElementById("download-pdf");
  var toast = document.getElementById("toast");
  var toastTimer;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.hidden = true;
    }, 2200);
  }

  if (button) {
    button.addEventListener("click", function () {
      showToast("Downloading Rishabh_Soni_Resume.pdf");
    });
  }
})();
