var data = {
  answers: [3, 1],
  userAnswers: [],
  timeLeft: 300
};

function startTimer() {
  if (data.timeLeft === 0) {
    data.timeLeft = 300;
  }
  data.counter = setInterval(count, 1000);
}

function count() {
  data.timeLeft--;
  $("#time").text(data.timeLeft);
  if (data.timeLeft === 0) {
    endQuiz();
  }
}

function newQuiz() {
  startTimer();
}

function endQuiz() {
  clearInterval(data.counter);
}

$(document).ready(function() {
  newQuiz();
});
