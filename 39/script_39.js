const textAreaEl = document.querySelector("#text");
const buttonSubmitEl = document.querySelector("#submit-array");
const listEl = document.querySelector("#list");
let newArray = [];


buttonSubmitEl.addEventListener("click", function() {
  let i = 0
  newArray.push(textAreaEl.value);
  createElements(textAreaEl.value);
  textAreaEl.value = "";
  console.log(newArray);
});


function createElements (value) {
  let ilTag = document.createElement("li");
  listEl.appendChild(ilTag);
  ilTag.innerHTML = value;
 };
 
