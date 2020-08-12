const timeEl = document.getElementById("time");
let secondsLeft = 0;
var startButton = document.getElementById('startButton');
timeEl.textContent = "Time: " + secondsLeft;

// Event listener that runs callback function setTime to start timer
startButton.addEventListener('click', function setTime() {
    // callback(startButton);
    var secondsLeft = 76
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent ="Time: " +  secondsLeft;
    startButton.setAttribute('disabled', true);
    // ^^^^^ solution to preventing double click running fuction setTime twice ----> https://stackoverflow.com/questions/20281546/how-to-prevent-calling-of-en-event-handler-twice-on-fast-clicks
    
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