var buttonColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userPattern = [];
var gameStarted = false;
var level = 0;

$(document).keypress(function () {
  if (!gameStarted) {
    gameStarted = true;
    nextSequence();
  }
});

$(".btn").click(function () {
  var userChoosenColor = $(this).attr("id");
  userPattern.push(userChoosenColor);
  handleClick(userChoosenColor);
  checkAnswer(userPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userPattern[currentLevel]) {
    //console.log("success");
    if (userPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    handleWrong();
  }
}


function nextSequence() {
  userPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = buttonColors[randomNumber];
  handlePress(randomColor);
  gamePattern.push(randomColor);
}


function playSound(color) { 
    var audSrc = "sounds/" + color + ".mp3";
    var music = new Audio(audSrc);
    music.play();
  }
  
  function handlePress(color) {
    $("#" + color)
      .fadeOut(100)
      .fadeIn(100);
    playSound(color);
  }
  
  function handleClick(color) {
    $("#" + color).addClass("pressed");
    setTimeout(function () {
      $("#" + color).removeClass("pressed");
    }, 100);
    playSound(color);
  }

  function handleWrong(){
    $("#level-title").text("Game Over, Press A Key to Start");
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
      }, 100);
    playSound("wrong");
    startOver();
  }

  function startOver(){
    level = 0;
    gamePattern = [];
    userPattern = [];
    gameStarted=false;
  }
  