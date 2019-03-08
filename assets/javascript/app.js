var data = {
  answers: [3, 4, 1, 2, 2, 4, 1, 3, 4, 2],
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
  var time = new Date(data.timeLeft * 1000);
  $("#time").text(time.toISOString().substr(15, 4));
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
    data.userAnswers[$(this).attr("name") - 1] = parseInt($(this).val());
  });

  var p = $("<p>").addClass("score");
  var score = 0;

  data.answers.forEach((answer, i) => {
    if (answer === data.userAnswers[i]) {
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
