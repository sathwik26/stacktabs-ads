const params = new URLSearchParams(location.search);
const token = params.get("token");

let seconds = 30;
let unlocked = false;

const status = document.getElementById("status");
const closeBtn = document.getElementById("closeBtn");

closeBtn.disabled = true;

const timer = setInterval(() => {
  seconds--;
  status.textContent = `Watch ${seconds}s to unlock`;

  if (seconds <= 0) {
    clearInterval(timer);
    unlocked = true;
    status.textContent = "You may now close the ad";
    closeBtn.disabled = false;
  }
}, 1000);

closeBtn.onclick = () => {
  if (!unlocked) return;

  try {
    chrome.runtime.sendMessage(
      "odajcbggmlnpoejgaljeabfkfgppidia",
      {
        action: "REWARDED_AD_COMPLETE",
        token
      },
      () => window.close()
    );
  } catch (e) {
    window.close();
  }
};
