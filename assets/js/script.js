//Variables to be created
var timeInterval = 0;
var timeRemaining = 60;
var timeClock = document.querySelector("#timer");
var yourScore = document.getElementById ("yourScore");
var questions = document.getElementById("question");
var hello = document.getElementById("hello");
var i = 0;
var optionAEL = document.getElementById ("OptionA");
var optionBEL = document.getElementById ("OptionB");
var optionCEL = document.getElementById ("OptionC");
var optionDEL = document.getElementById ("OptionD");
var quizSection = document.getElementById("quizSection");
var topScore = document.getElementById ("topScore");
var leaders = [];
var list = document.getElementById("top-score-list");
var submitButton = document.getElementById ("startBtn");
var topScore = document.getElementById(topScores);

init();

//initializing

function init(){
    topScore.style.display ="none";
    quizSection.style.display="none";

    var lastUser =

}

document.querySelector("#startBtn").addEventListener('click,startQuiz');


function startQuiz () [
    quizSection.style.display = "block";
    startButton.style.dsiplay = "none";
    hello.style.display ="none";

    timerInterval = setInterval (function()){
        timeRemaining --;
        timeClock.textContent = timeRemaining + 'seconds left for quiz";
    }


function renderQuestions ()
{
    questions.innerHTML = questionArr[i].question;
    optionAEL.innerHTML = questionArr[i].optionA;
    optionAEL.innerHTML = questionArr[i].optionA;
    optionAEL.innerHTML = questionArr[i].optionA;
}
]
