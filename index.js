//convert html ID to JS variable
const startButton = document.getElementById('start-button');
var timeEl = document.getElementById("time-id");
var headerElem = document.getElementById('header-elem')
var finalScore = document.getElementById('final-score')
var questionElem = document.getElementById('questionElem')
var secondsLeft = 0;
var counter = 0;
//Displays current time left in quiz
timeEl.textContent = "Time: " + secondsLeft;

// on load displays header and prompt messages ---source--- https://www.w3schools.com/jsref/event_onload.asp
document.getElementById('header-elem').addEventListener('load', displayGreeting());

function displayGreeting() {
    document.getElementById('header-elem').innerText = "Coding Quiz Challenge";
    document.getElementById('prompt-elem').innerText = 'Try to anwser the following code related questions within the time limit. Every incorrect answer penalizes your scoretime by 10 seconds.'
}

// Event listener that runs callback function setTime to start timer
startButton.addEventListener('click', function setTime() {
    startButton.setAttribute('disabled', true);
    // ^^^^^ solution to disable start button, preventing double click running fuction setTime mulitple times ----> https://stackoverflow.com/questions/20281546/how-to-prevent-calling-of-en-event-handler-twice-on-fast-clicks    
    startButton.style.display = 'none';
    var secondsLeft = 76
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);


});
// event listener that hides headerElem & promptElem when start button is clicked -- src= https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
startButton.addEventListener('click', function clearMessage() {
    var headerElem = document.getElementById('header-elem');
    if (headerElem.style.display === 'none') {
        headerElem.style.display = 'block';
    } else {
        headerElem.style.display = 'none';
    }
    var promptElem = document.getElementById('prompt-elem');
    if (promptElem.style.display === 'none') {
        promptElem.style.display = 'block';
    } else {
        promptElem.style.display = 'none';
    }
    // appendQuestion('What is the meaning of life?')
});
// var counter = 0;

startButton.addEventListener('click', function displayQA() {

    var questionArray = [
        {
            question: 'Why is the sky blue?',
            answers: [
                {
                    text: 'Because we live in the eye of a blue eyed giant',
                    correct: false
                },
                {
                    text: 'Because it reflects the ocean',
                    correct: false
                },
                {
                    text: 'Because ozone releases blue light when heated',
                    correct: true
                }
            ]
        },
        {
            question: `Who's the Greatest?`,
            answers: [
                {
                    text: 'muhammad Ali',
                    correct: false
                },
                {
                    text: 'Michael Jordan',
                    correct: false
                },
                {
                    text: 'Shonuff',
                    correct: true
                }
            ]
        },
        {
            question: 'Which way is up?',
            answers: [
                {
                    text: '>',
                    correct: false
                },
                {
                    text: 'V',
                    correct: false
                },
                {
                    text: '<',
                    correct: false
                },
                {
                    text: '^',
                    correct: true
                }
            ]
        }];

    var questionElem = document.getElementById('question-elem')
    var answerElem = document.getElementById('answer-buttons')
    var currentQuestion = questionArray[counter]
    var answersArray = currentQuestion.answers
    var questionText = currentQuestion.question
    var newQuestion = document.createElement('h3')

    var resetQuestion = document.getElementById('question-elem')
    resetQuestion.value=resetQuestion.defaultValue;
    newQuestion.innerText = questionText;
    questionElem.appendChild(newQuestion)
    for (var j = 0; j < answersArray.length; j++) {
        var answerButton = document.createElement('button')
        var currentAnswer = answersArray[j]
        answerButton.innerText = currentAnswer.text
        answerButton.setAttribute('is-correct', currentAnswer.correct)
        // debugger
        answerButton.addEventListener('click', function () {
           
           counter++;
           displayQA();
           console.log(counter);
        //    return counter;
            
            // if (questionArray.correct == true) {
            // }
            //what to do when clicked
        });
        //creating more children, go to top of function and do innerhtml for each element
        answerElem.appendChild(answerButton)
        
    }

});






