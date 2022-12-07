const textAreaEl = document.querySelector("#text");
const buttonSubmitEl = document.querySelector("#submit-array");
const listEl = document.querySelector("#list");
let newArray = [];


buttonSubmitEl.addEventListener("click", function() {
  newArray.push(textAreaEl.value);
  createElements(textAreaEl.value);
  textAreaEl.value = "";
  console.log(newArray);
});


function createElements (value) {
  let liTag = document.createElement("li");
  listEl.appendChild(liTag);
  liTag.innerHTML = value;
 };
 
