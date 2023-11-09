let computerScore = 0;
let userScore = 0;
let round = 0;
let gameList = ["rock", "paper", "scissor"];
let userSelectedOption = "";
let ties = 0;
let randomGeneratedVal = "";

let currentRound = 0;
let totalRound = 10;

//------------------- global computer score ---------------------<
document.querySelector(
  "#computerScore"
).innerText = `Computer Score: ${computerScore}`;

//-------------------- global user score --------------------------<
document.querySelector("#userScore").innerText = `User Score: ${userScore}`;

//-------------------- global tie rounds count -------------------<
document.querySelector("#tie").innerText = `Total Tie: ${ties}`;

//-------------------- computer generated random Value for gameList -----------------<
function computerGeneratedVal() {
  randomGeneratedVal = gameList[Math.floor(Math.random() * gameList.length)];
}

//------------------- display user selected option -----------------------<
function displayUserSelectedOption(element) {
  userSelectedOption = element;
  document.querySelector(
    "#userSelectedOption"
  ).innerText = `User Selected option is ${element}`;
}

//----------------- display computer selected option ---------------------<
function displayComputerSelectedOption() {
  document.querySelector(
    "#computerSelectedOption"
  ).innerText = `Computer Selected option is ${randomGeneratedVal}`;
}

function userScoreIncrease() {
  userScore++;
  document.querySelector("#userScore").innerText = `User Score: ${userScore}`;
}

function computerScoreIncrease() {
  computerScore++;
  document.querySelector(
    "#computerScore"
  ).innerText = `Computer Score: ${computerScore}`;
}

function tieScoreIncrease() {
  ties++;
  document.querySelector("#tie").innerText = `Total Tie: ${ties}`;
}

function play(element) {
  switch (element) {
    case "rock":
      displayUserSelectedOption(element);
      computerGeneratedVal();
      displayComputerSelectedOption();
      break;
    case "paper":
      displayUserSelectedOption(element);
      computerGeneratedVal();
      displayComputerSelectedOption();
      break;
    case "scissor":
      displayUserSelectedOption(element);
      computerGeneratedVal();
      displayComputerSelectedOption();
      break;
    default:
      console.log("found no element");
  }

  if (
    (userSelectedOption === "rock" && randomGeneratedVal === "scissor") ||
    (userSelectedOption === "paper" && randomGeneratedVal === "rock") ||
    (userSelectedOption === "scissor" && randomGeneratedVal === "paper")
  ) {
    userScoreIncrease();
  } else if (
    (userSelectedOption === "scissor" && randomGeneratedVal === "rock") ||
    (userSelectedOption === "rock" && randomGeneratedVal === "paper") ||
    (userSelectedOption === "paper" && randomGeneratedVal === "scissor")
  ) {
    computerScoreIncrease();
  } else {
    tieScoreIncrease();
  }
}
