var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;

function makeSound(key) {
  switch (key) {
    case "red":
      var playRed = new Audio('sounds/red.mp3');
      playRed.play();
      break;
    case "blue":
      var playBlue = new Audio('sounds/blue.mp3');
      playBlue.play();
      break;
    case "green":
      var playGreen = new Audio('sounds/green.mp3');
      playGreen.play();
      break;
    case "yellow":
      var playYellow = new Audio('sounds/yellow.mp3');
      playYellow.play();
      break;
    case "wrong":
      var playWrong = new Audio('sounds/wrong.mp3');
      playWrong.play();
      break;
  };
};

function playSound(name) {
  switch (name) {
    case "red":
      var playRed = new Audio('sounds/red.mp3');
      playRed.play();
      break;
    case "blue":
      var playBlue = new Audio('sounds/blue.mp3');
      playBlue.play();
      break;
    case "green":
      var playGreen = new Audio('sounds/green.mp3');
      playGreen.play();
      break;
    case "yellow":
      var playYellow = new Audio('sounds/yellow.mp3');
      playYellow.play();
      break;
    case "wrong":
      var playWrong = new Audio('sounds/wrong.mp3');
      playWrong.play();
      break;
  };
};

function animatePress(currentColour) {
  console.log(currentColour);

  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
};

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(4 * Math.random());
  console.log(randomNumber);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  console.log(gamePattern);

  makeSound(randomChosenColour);

  $("#" + randomChosenColour).delay(100).fadeOut().fadeIn("slow");
};

function arraysCheck(a, b) {
  for (var i = 0; i < b.length; ++i) {
    if (a[i] !== b[i]) return false;
    else if (a[i] == b[i] && i == b.length -1) return true;
  }

  //if (a === b) return true;
  //if (a == null || b == null) return false;
  //if (a.length !== b.length) return false;


  return true;
};

function checkAnswer(currentLevel) {
  if (arraysCheck(gamePattern, userClickedPattern)) {
    console.log("sucess");
    setTimeout(1000);
}
  else {
    console.log("wrong");
    gameOver();
    return;
  };
  if (gamePattern.length == userClickedPattern.length){
    setTimeout ( function() {nextSequence();},1000);
    userClickedPattern = [];
  };
};

function gameOver() {
  userClickedPattern = [];
  gamePattern = [];
  level = 0;
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200);
$("#level-title").text("Game Over, Press Any Key to Restart!")
};

/////////////////////////////////////////////////////////////////////

$("body").on("keypress", function() {

  nextSequence();


});

$(".btn").on("click", function() {
  //*alert ("clicked!");
  var $input = $(this);
  var userChosenColour = $input.attr("id");
  playSound(userChosenColour);
  animatePress(userChosenColour);
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  checkAnswer(level);

});
