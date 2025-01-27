var target = document.getElementById("target");
var scoreValue = document.getElementById("score-value");
var levelValue = document.getElementById("level-value");
var timerValue = document.getElementById("timer-value");
var gameContainer = document.getElementById("game-container");
var gameContainerWidth = gameContainer.clientWidth;
var gameContainerHeight = gameContainer.clientHeight;
var score = 0;
var level = 1;
var timeLeft = 30;
var timerId;

function updateScore() {
  scoreValue.innerText = score;
}

function updateLevel() {
  levelValue.innerText = level;
}

function updateTimer() {
  timerValue.innerText = timeLeft;
}

function moveTarget() {
  var randomX = Math.floor(Math.random() * (gameContainerWidth - 50));
  var randomY = Math.floor(Math.random() * (gameContainerHeight - 50));
  target.style.left = randomX + "px";
  target.style.top = randomY + "px";
}

function increaseScore() {
  score++;
  updateScore();
}

function nextLevel() {
  level++;
  updateLevel();
  timeLeft += 10;
  updateTimer();
  clearInterval(timerId);
  startTimer();
}

function startTimer() {
  timerId = setInterval(function() {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) {
      clearInterval(timerId);
      gameOver();
    }
  }, 1000);
}

function gameOver() {
  target.removeEventListener("click", increaseScore);
  alert("Game Over! Your final score is: " + score);
}

target.addEventListener("click", function() {
  increaseScore();
  moveTarget();
});

startTimer();
moveTarget();

setTimeout(function() {
  nextLevel();
}, 30000); // Move to next level after 30 seconds
