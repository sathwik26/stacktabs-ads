const params = new URLSearchParams(location.search);
const token = params.get("token");

let seconds = 30;

const closeBtn = document.getElementById("closeBtn");
const status = document.getElementById("status");

closeBtn.style.display = "none";

const timer = setInterval(() => {
  seconds--;

  status.textContent = `Please watch ${seconds}s`;

  if (seconds <= 0) {
    clearInterval(timer);
    status.textContent = "You may now close the ad";
    closeBtn.style.display = "block";

    // 🔥 IMPORTANT
    chrome.runtime.sendMessage(
      chrome.runtime.id,
      {
        action: "REWARDED_AD_COMPLETED",
        token
      }
    );
  }

}, 1000);

closeBtn.onclick = () => {
  window.close();
};
