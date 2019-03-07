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

  $("input:checked").each(function() {
    data.userAnswers[$(this).attr("name") - 1] = $(this).val();
  });

  var p = $("<p>").addClass("score");
  var score = 0;

  data.userAnswers.forEach((user, i) => {
    if (parseInt(user) === data.answers[i]) {
      score++;
    }
  });

  p.text(
    "You got " +
      score +
      " out of " +
      data.answers.length +
      " questions correct!"
  );

  $("#content").append(p);
}

$(document).ready(function() {
  newQuiz();

  $("#submit").on("click", function(e) {
    e.preventDefault();
    endQuiz();
  });
});
