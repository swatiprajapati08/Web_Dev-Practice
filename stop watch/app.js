window.onload = function () {
  let second = 0;
  let ten = 0;

  let buttonStart = document.querySelector("#start");
  let appendSecond = document.querySelector("#seconds");
  let appendtens = document.querySelector("#tens");
  let buttonStop = document.querySelector("#stop");
  let buttonReset = document.querySelector("#reset");
  let interval;

  buttonStart.onclick = () => {
    this.clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = () => {
    this.clearInterval(interval);
  };

  buttonReset.onclick = () => {
    this.clearInterval(interval);
    ten = "00";
    second = "00";
    appendSecond.innerHTML = second;
    appendtens.innerHTML = ten;
  };
  function startTimer() {
    ten++;
    ten < 9 ? (appendtens.innerHTML = "0" + ten) : (appendtens.innerHTML = ten);
    if (ten > 99) {
      second++;
      appendSecond.innerHTML = "0" + second;
      ten = 0;
      appendtens.innerHTML = "0" + 0;
    }
    if (second > 9) {
      appendSecond.innerHTML = second;
    }
  }
};
