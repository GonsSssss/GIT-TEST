var SCISSORS = "가위";
var ROCK = "바위";
var PAPER = "보";

// 가위를 눌렀을 때 실행될 함수를 만들어라
// 함수 안에 들어갈 내용은 컴퓨터가 가위 바위 보를 뽑을 확률을 정해서
// 컴퓨터의 패를 만들어 주고 내가 고른 패와 비교하여 승패를 정해준다.
// 컴퓨터의 결과를 comInput에 저장하게 변수를 선언하고
// rnd 변수를 만들어서 컴퓨터가 가위 바위 보를 1/3 확률로 각각 뽑도록 세팅
var comInput;
var rnd = Math.random();

function onScissorsClick() {
  if (rnd < 0.33333) {
    comInput = SCISSORS;
  } else if (rnd < 0.66666) {
    comInput = ROCK;
  } else {
    comInput = PAPER;
  }
  if (comInput === SCISSORS) {
    alert("컴퓨터가 가위를 뽑아서 비겼습니다.");
  } else if (comInput === ROCK) {
    alert("컴퓨터가 바위를 뽑아서 졋습니다.");
  } else {
    alert("컴퓨터가 보를 뽑아서 이겼습니다.");
  }
}
function onRockClick() {
  if (rnd < 0.33333) {
    comInput = SCISSORS;
  } else if (rnd < 0.66666) {
    comInput = ROCK;
  } else {
    comInput = PAPER;
  }
  if (comInput === SCISSORS) {
    alert("컴퓨터가 가위를 뽑아서 비겼습니다.");
  } else if (comInput === ROCK) {
    alert("컴퓨터가 바위를 뽑아서 졋습니다.");
  } else {
    alert("컴퓨터가 보를 뽑아서 이겼습니다.");
  }
}

function onPaperClick() {
  if (rnd < 0.33333) {
    comInput = SCISSORS;
  } else if (rnd < 0.66666) {
    comInput = ROCK;
  } else {
    comInput = PAPER;
  }
  if (comInput === SCISSORS) {
    alert("컴퓨터가 가위를 뽑아서 비겼습니다.");
  } else if (comInput === ROCK) {
    alert("컴퓨터가 바위를 뽑아서 졋습니다.");
  } else {
    alert("컴퓨터가 보를 뽑아서 이겼습니다.");
  }
}
