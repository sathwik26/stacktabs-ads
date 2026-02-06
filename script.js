// ===== EXTENSION ID =====
const EXTENSION_ID = "odajcbggmlnpoejgaljeabfkfgppidia";

// ===== GET TOKEN FROM URL =====
const params = new URLSearchParams(location.search);
const token = params.get("token");

let seconds = 30;

const status = document.getElementById("status");
const closeBtn = document.getElementById("closeBtn");

// hide close initially
closeBtn.style.display = "none";

// ===== TIMER =====
const timer = setInterval(() => {
  seconds--;

  status.textContent = `Please watch ${seconds}s`;

  if (seconds <= 0) {
    clearInterval(timer);

    status.textContent = "Ad completed. You may close this page.";
    closeBtn.style.display = "block";

    // ⭐ THIS IS FIX-6
    chrome.runtime.sendMessage(
      EXTENSION_ID,
      {
        action: "REWARDED_AD_COMPLETED",
        token
      }
    );
  }

}, 1000);


// ===== CLOSE BUTTON =====
closeBtn.onclick = () => {
  window.close();
};
