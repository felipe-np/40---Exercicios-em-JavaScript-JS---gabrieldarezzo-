const greenButtonInput = document.querySelector("#green-button");
const redButtonInput =  document.querySelector("#red-button");

greenButtonInput.addEventListener("click", function() {
  document.body.style.background = "green";
});

redButtonInput.addEventListener("click", function () {
  document.body.style.background = "red";
});