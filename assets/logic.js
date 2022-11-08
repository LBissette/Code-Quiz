// create a timer
var timerEl = document.getElementById("time");
var startEl = document.getElementById("btn-start");
var score = 75;
var questionCounter = 0;

// Show questions on page
var quizBox = document.getElementById("questions");
var endScreen = document.getElementById("end-screen");

function countdown() {
  var timeLeft = 30;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft = 0;

    }
  }, 1000);
}
// hides start element
function hideStart() {
  var wrapper = document.querySelector(".wrapper");
  wrapper.setAttribute("style", "display: none;");
}
// starts when start quiz is pressed
startEl.addEventListener("click", function () {
  hideStart();
  countdown();
  getQuestion();
});
// timer deducts when wrong answer is selected

// if all the questions are answered the game ends

// if the time reaches 0 the game ends

// create the leaderboard
// Submit button saves initials and score

//Question bank
var myQuestions = [
  {
    title: "Commonly used data types DO NOT include:",
    choice: ["Strings", "Boolean", "Alerts", "Numbers"],
    correctAnswer: "Alerts",
  },
  {
    title: "The condition of an if / else statement is inclosed in _____.",
    choice: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
    correctAnswer: "Parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store _____.",
    choice: [
      "Numbers & Strings",
      "Other Arrays",
      "Booleans",
      "All of the Above",
    ],
    correctAnswer: "All of the Above",
  },
  {
    title:
      "String values must be enclosed within _____ when being assigned to variables.",
    choice: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
    correctAnswer: "Quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice: ["JavaScript", "Terminal / Bash", "For Loops", "Console Log"],
    correctAnswer: "Console Log",
  },
];

// call one question
function getQuestion() {
// var currentQuestion = myQuestions(questionCounter);

  for (var i = 0; i < myQuestions.length; i++) {
    var counter = myQuestions[i];
    var h2 = document.setAttribute("h2", title);
    var button = document.setAttribute("button", choice);
    li.textContent = choice;
    li.setAttribute("data-index", i);
  }
  questionCounter++;
}

//call next question & Check answer
 choice.addEventListener("click", function(){
  if (myQuestions.choice === myQuestion.correctAnswer) {
    getQuestion();
    } else {
      getQuestion();
      timeLeft-5;
  }
})

// hide question
