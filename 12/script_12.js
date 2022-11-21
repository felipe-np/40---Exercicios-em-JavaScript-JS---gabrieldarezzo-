// Comentário de uma linha
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
  const firstValue = numberOneInput.value;
  const secondValue = numberTwoInput.value;
  
  if (firstValue !== "" && secondValue !== "")  {
    let sumOfValues = sum(firstValue, secondValue);
    resultEl.innerHTML = `The result of the sum is: ${sumOfValues}`;
  } else {
    alert ('Type two numbers');
  }
});

function formatNumber(value){
  return value.replace(/\D/g, "");
};

function sum(firstValue, secondValue) {
  return Number(firstValue) + Number(secondValue);
};
