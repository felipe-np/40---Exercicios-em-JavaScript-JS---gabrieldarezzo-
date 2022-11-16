const firstNameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const button = document.querySelector("#submit-button");

document.addEventListener("DOMContentLoaded", function() {
  if (firstNameInput.value === "") {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}, false);

firstNameInput.addEventListener("change", function() {
  if (firstNameInput.value === "") {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
});

button.addEventListener("click", function() {
  const fullName = `${firstNameInput.value.trim()} ${surnameInput.value.trim()}`;

  alert(`Olá ${fullName}`);
});
