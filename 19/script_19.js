const inputNumber = document.querySelector("#number");
const resultEl = document.querySelector("#result");

inputNumber.addEventListener('keyup', function () {
  inputNumber.value = formatNumber(inputNumber.value)
})

inputNumber.addEventListener('change', function() {
  if (inputNumber.value < 0) {
    alert("Don't select a negative number")
  } else if (inputNumber.value % 2 === 0){
  resultEl.innerHTML = "The number is: even";
  } else
  resultEl.innerHTML = "The number is: odd";
});

function formatNumber(value){
  return value.replace(/\D/g, "");
};