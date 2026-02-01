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
    // Notify extension (works because dashboard opened this tab)
    window.opener?.postMessage(
      { type: "STACKTABS_REWARDED_COMPLETE" },
      "*"
    );
  } catch (e) {}

  // Close tab automatically
  setTimeout(() => {
    window.close();
  }, 500);
}
