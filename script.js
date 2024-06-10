console.log("Script Working..");

let button = document.getElementById("guess");
let restart = document.getElementById("restart");
let counter = document.getElementById("counter");
let hint = document.getElementById("hint");
let randomValue = generateRandomValue();
let count = 0;
let won = false;
let val;

function generateRandomValue() {
  return Math.floor(Math.random() * 100) + 1;
}
button.onclick = function () {
  val = Number(document.getElementById("guessValue").value);
  getHint(val);
  increaseCounter();
};
function getHint(val) {
  if (val >= 1 && val <= 100) {
    if (val == randomValue) {
      hint.innerText = `Congratulations, you won in ${count + 1} attempts!`;
      won = true;
    } else if (randomValue - val > 10) {
      hint.innerText = "Your guess is too low!";
    } else if (val - randomValue > 10) {
      hint.innerText = "Your guess is too high!";
    } else if (randomValue - val <= 10 && randomValue > val) {
      hint.innerText = "Your guess is slight low!";
    } else if (val - randomValue <= 10 && val > randomValue) {
      hint.innerText = "Your guess is slight high!";
    }
  } else {
    hint.innerText = "No hints for this value";
  }
}
function increaseCounter() {
  if (count < 11) {
    count++;
    counter.innerText = count;
  } else {
    counter.innerText = "Guesses Finished";
    if (!won) {
      hint.innerText = `You lost, the ans was ${randomValue}`;
    }
  }
}
restart.onclick = function () {
  location.href = "/index1.html";
};
