const gameInputEl = document.querySelector("#game-input");
const pEl = document.querySelector("#result")

gameInputEl.addEventListener("keyup" , function() {
  gameInputEl.value = formatText(gameInputEl.value);
  
  if (gameInputEl.value.toLowerCase().trim().indexOf("dota") > - 1) {
    pEl.innerHTML = "You are correct!";
  } else {
  return pEl.innerHTML =  "You are incorrect!";
}});

function formatText(value) {
value = value.replace(/[0-9]+/g, "");
return value;
}
