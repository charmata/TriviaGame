var data = {
  answers: [3, 4],
  userAnswers: [0, 0],
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

  $("input:checked").each(function(i) {
    data.userAnswers[$(this).attr("name") - 1] = $(this).val();
  });
  console.log(data.userAnswers);
}

$(document).ready(function() {
  newQuiz();

  $("#submit").on("click", function(e) {
    e.preventDefault();
    endQuiz();
  });
});
