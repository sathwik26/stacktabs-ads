let seconds = 30;
const span = document.querySelector("#timer span");

const interval = setInterval(() => {
  seconds--;
  span.textContent = seconds;

  if (seconds <= 0) {
    clearInterval(interval);
    finishAd();
  }
}, 1000);

function finishAd() {
  try {
    chrome.runtime.sendMessage(
      "odajcbggmlnpoejgaljeabfkfgppidia",
      { action: "REWARDED_AD_COMPLETE" }
    );
  } catch (e) {}

  setTimeout(() => {
    window.close();
  }, 500);
}
