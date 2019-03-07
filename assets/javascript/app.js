var data = {
  answers: [3, 4],
  userAnswers: [],
  timeLeft: 120
};

function startTimer() {
  if (data.timeLeft === 0) {
    data.timeLeft = 120;
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

  $("#submit").on("click", function(e) {
    e.preventDefault();
  });
});
