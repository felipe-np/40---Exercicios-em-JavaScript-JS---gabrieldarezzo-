const inputNumberEl = document.querySelector("#number");
const buttonSubmitEl = document.querySelector("#submit-button");
const listEl = document.querySelector("#list");
let newArray = [];

inputNumberEl.addEventListener("keyup", function () {
  inputNumberEl.value = formatNumber(inputNumberEl.value);
})

buttonSubmitEl.addEventListener("click", function() {
  const liElement = createElements(inputNumberEl.value)
  newArray.push(inputNumberEl.value);
  if (inputNumberEl.value % 2 === 0) {
    liElement.classList.add("even-number");
  }
  inputNumberEl.value = "";
  console.log(newArray);
})

function formatNumber(value){
  return value.replace(/\D/g, "");
};

function createElements (value) {
  const liTag = document.createElement("li");
  listEl.appendChild(liTag);
  liTag.innerHTML = value;
  return liTag
}
 