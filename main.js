document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      var cookieConsentPopup = document.getElementById("cookieConsentPopup");
      cookieConsentPopup.style.display = "block";

      var acceptCookiesBtn = document.getElementById("acceptCookiesBtn");
      acceptCookiesBtn.addEventListener("click", function() {
          cookieConsentPopup.style.display = "none";
      });
  }, 1000);
});