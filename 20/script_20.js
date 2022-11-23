const firstValueInput = document.querySelector("#first-value");
const secondValueInput = document.querySelector("#second-value");
const resultEl = document.querySelector("#result");

firstValueInput.addEventListener('keyup', function () {
  firstValueInput.value = formatNumber(firstValueInput.value);
})

secondValueInput.addEventListener('keyup', function () {
  secondValueInput.value = formatNumber(secondValueInput.value);
})

firstValueInput.addEventListener("change", function() {
  updateInnerHTML();
});

secondValueInput.addEventListener("change", function() {
  updateInnerHTML();
});

firstValueInput.addEventListener("keyup", function() {
  updateInnerHTML();
});

secondValueInput.addEventListener("keyup", function() {
  updateInnerHTML();
});


function multiply(value1, value2) {
  return value1 * value2;
};

function formatNumber(value){
  return value.replace(/\D/g, "");
};

function updateInnerHTML() {
  resultEl.innerHTML = `The result of the multiplication is: ${multiply(firstValueInput.value, secondValueInput.value)}.`
};
