let gameSeq = [];
let userSeq = [];

let btns = ["red", "blue", "green", "yellow"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keydown", function () {
  if (!started) {
    console.log("Game has already started");
    started = true;

    levelup();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelup() {
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randcolor = btns[randIdx];
  gameSeq.push(randcolor);
  gameFlash(document.querySelector(`.${randcolor}`));
}

function checkAnswer() {
  console.log("curr level : ", level);
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAnswer();
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
