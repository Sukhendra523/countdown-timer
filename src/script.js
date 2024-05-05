(function () {
  const hour = document.querySelector(".hour");
  const min = document.querySelector(".minute");
  const sec = document.querySelector(".sec");
  const startBtn = document.querySelector(".start");
  const stopBtn = document.querySelector(".stop");
  const resetBtn = document.querySelector(".reset");

  let countdownTimer = null;

  startBtn.addEventListener("click", startTimer);
  stopBtn.addEventListener("click", pauseTimer);
  resetBtn.addEventListener("click", resetTimer);

  // Start Timer  - START
  function startTimer() {
    if (hour.value == 0 && min.value == 0 && sec.value == 0) return;

    function startInterval() {
      startBtn.style.display = "none";
      stopBtn.style.display = "initial";

      countdownTimer = setInterval(function () {
        timer();
      }, 1000);
    }
    startInterval();
  }
  // Start Timer  - END





  // Stop/pause Timer  - START
  function pauseTimer() {
    stopInterval("pause");
  }
  // Stop/pause Timer - END




  // Reset Timer  - START
  function resetTimer() {
    hour.value = "";
    min.value = "";
    sec.value = "";

    stopInterval();
  }
  // Reset Timer Button - END



  function timer() {
    // Formatting the time - START
    if (sec.value > 60) {
      min.value++;
      sec.value = parseInt(sec.value) - 59;
    }
    if (min.value > 60) {
      hour.value++;
      min.value = parseInt(min.value) - 60;
    }
    min.value = min.value > 60 ? 60 : min.value;
    // Formatting the time - END

    // Updating the Time - START
    if (hour.value == 0 && min.value == 0 && sec.value == 0) {
      hour.value = "";
      min.value = "";
      sec.value = "";
      stopInterval();
    } else if (sec.value != 0) {
      sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
    } else if (min.value != 0 && sec.value == 0) {
      sec.value = 59;
      min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`;
    } else if (hour.value != 0 && min.value == 0) {
      min.value = 60;
      hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
    }
    return;
    // Updating the Time - END
  }



  // Stop timer logic - START
  function stopInterval(currentState) {
    startBtn.innerHTML = currentState === "pause" ? "Continue" : "Start";

    stopBtn.style.display = "none";
    startBtn.style.display = "initial";
    clearInterval(countdownTimer);
  }
  // Stop Timer logic  - END
})();
