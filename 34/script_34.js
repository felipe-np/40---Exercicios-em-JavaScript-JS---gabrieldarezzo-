const inputEl = document.querySelector("#input-number");
const buttonEl = document.querySelector("#button-number");
const higherOrLowerEl = document.querySelector("#higher-or-lower");
const numberOfChancesEl = document.querySelector("#number-of-chances");
const reloadPageButton = document.querySelector("#reload-page");
let chances = 6;
let maxnumber = 100;
let minnumber = 1;
let number = randomNumber()



inputEl.addEventListener("keyup",function() {
  inputEl.value = formatNumber(inputEl.value);
});

buttonEl.addEventListener("click" , function () { 
  if (parseInt(inputEl.value) > number) {
      higherOrLowerEl.innerHTML = "Try a lower number.";
      chances--;
      numberOfChancesEl.innerHTML = `You still got ${chances} chances. Keep it up!`;
    } else if (parseInt(inputEl.value) < number) {
      higherOrLowerEl.innerHTML = "Try a higher number.";
      chances--;
      numberOfChancesEl.innerHTML = `You still got ${chances} chances. Keep it up!`;
    } else {
      higherOrLowerEl.innerHTML = "You got it!";
      numberOfChancesEl.innerHTML = `Congratulations! You did it with ${7 - chances} tries.Feel free to play again with a new random number, just click the button and go again.`;
      document.getElementById("button-number").disabled = true;
    }
    if (chances === 0) {
      numberOfChancesEl.innerHTML = `You ran out of chances, good luck next time. Click the button to try again.`;
      document.getElementById("button-number").disabled = true;
    }
    });

reloadPageButton.addEventListener("click", function () {
  window.location.reload();
})

function formatNumber(value){
  return value.replace(/\D/g, "");
};

function randomNumber () {
  return Math.ceil((Math.random() * (maxnumber - minnumber) + minnumber).toFixed(2))
}


console.log(number);