const timeEl = document.getElementById("time");
let secondsLeft = 0;
var startButton = document.getElementById('startButton');
timeEl.textContent = "Time: " + secondsLeft;

// Event listener that runs callback function to start timer at 75
startButton.addEventListener('click', function setTime() {
    var secondsLeft = 76
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent ="Time: " +  secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
});

function sendMessage() {
  console.log('Time is up!');
}

setTime();