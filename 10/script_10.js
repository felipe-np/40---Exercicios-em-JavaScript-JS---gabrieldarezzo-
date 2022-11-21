const numberOneInput = document.querySelector("#first-number");
const numberTwoInput = document.querySelector("#second-number");
const buttonSumInput = document.querySelector("#btn-sum");
const resultEl = document.querySelector("#sum-result");

numberOneInput.addEventListener('keyup', function() {
  numberOneInput.value = formatNumber(numberOneInput.value);
});

numberTwoInput.addEventListener('keyup', function() {
  numberTwoInput.value = formatNumber(numberTwoInput.value);
});

buttonSumInput.addEventListener('click', function() {
  let firstValue = numberOneInput.value;
  let secondValue = numberTwoInput.value;
  
  if (firstValue !== "" && secondValue !== "")  {
    let sum = Number(firstValue) + Number(secondValue);
    resultEl.innerHTML = sum;
  } else {
    alert ('Type two numbers');
  }
});

function formatNumber(value){
  return value.replace(/\D/g, "");
};
