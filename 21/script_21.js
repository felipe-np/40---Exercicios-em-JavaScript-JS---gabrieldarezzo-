const totalValueEl = document.querySelector("#total-value");
const discountValueEl = document.querySelector("#discount-value");
const liquidValueEl = document.querySelector("#liquid-value");
const discount = 0.05;

totalValueEl.addEventListener("keyup", function () {
  totalValueEl.value = formatNumber(totalValueEl.value);

  updateElements(totalValueEl.value);
});

totalValueEl.addEventListener("change", function () {
  updateElements(totalValueEl.value);
});

function formatNumber(value){
  return value.replace(/\D/g, "");
};

function getDiscount(value) {
  return (Number(value) * discount).toFixed(2);
};
  
function getLiquidValue(value) {
  return (Number(value) - getDiscount(value)).toFixed(2);
};

function updateElements(value) {
  discountValueEl.innerHTML = `R$ ${getDiscount(value)}`;
  liquidValueEl.innerHTML = `R$ ${getLiquidValue(value)}`;
};
