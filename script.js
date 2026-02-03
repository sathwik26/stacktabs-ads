let seconds = 30;
  const status = document.getElementById("status");
  const closeBtn = document.getElementById("closeBtn");

  const timer = setInterval(() => {
    seconds--;
    status.textContent = `Watch ${seconds}s to unlock`;

    if (seconds <= 0) {
      clearInterval(timer);
      status.textContent = "You may now close the ad";
      closeBtn.disabled = false;
    }
  }, 1000);

  closeBtn.onclick = () => {
    try {
      chrome.runtime.sendMessage(
        "odajcbggmlnpoejgaljeabfkfgppidia",
        { action: "REWARDED_AD_COMPLETE" }
      );
    } catch (e) {}

    window.close();
  };
