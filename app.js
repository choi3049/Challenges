const numberForm = document.querySelector("#number-form");
const playInput = document.querySelector(".play-form input");
const numForm = document.querySelector(".num-form input");
const greeting = document.querySelector("#greeting");
const result = document.querySelector("#result");

let myNum;
let maxNum;
const HIDDEN_CLASSNAME = "hidden";

function playBtnClick(event) {
  event.preventDefault();
  myNum = playInput.value;
  maxNum = numForm.value;
  const ranNum = Math.floor(Math.random() * maxNum);
  greeting.innerText = `You chose: ${myNum},the machine chose: ${ranNum}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  result.classList.remove(HIDDEN_CLASSNAME);
  if (parseInt(myNum) === parseInt(ranNum)) {
    result.innerText = `You won`;
  } else result.innerText = `You lost`;
}

numberForm.addEventListener("submit", playBtnClick);
