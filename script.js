let seconds = 30;
const closeBtn = document.getElementById("closeBtn");
const status = document.getElementById("status");

const timer = setInterval(() => {
  seconds--;
  status.textContent = `Please wait ${seconds}s`;

  if (seconds <= 0) {
    clearInterval(timer);
    status.textContent = "You may now close the ad";
    closeBtn.style.display = "block";
  }
}, 1000);

closeBtn.onclick = () => {
  chrome.runtime.sendMessage({
    action: "REWARDED_AD_COMPLETED",
    token: new URLSearchParams(location.search).get("token")
  });
  window.close();
};
