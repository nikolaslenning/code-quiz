//convert html ID to JS variable
var startButton = document.getElementById('startButton');
var timeEl = document.getElementById("time");
var headerElem = document.getElementById('headerElem')
var finalScore = document.getElementById('finalScore')
var questionElem = document.getElementById('questionElem')

var secondsLeft = 0;


//Displays current time left in quiz
timeEl.textContent = "Time: " + secondsLeft;

// on load display header and prompt messages ---source--- https://www.w3schools.com/jsref/event_onload.asp
document.getElementById('headerElem').addEventListener('load', displayGreeting());

function displayGreeting() {
    document.getElementById('headerElem').innerHTML = "Coding Quiz Challenge";
    document.getElementById('promptElem').innerHTML = 'Try to anser the following code related questions within the time limit. Every incorrect answer penalizes your scoretime by 10 seconds.'    
}

// Event listener that runs callback function setTime to start timer
startButton.addEventListener('click', function setTime() {
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

// setTime();