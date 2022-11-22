const buttonEl = document.querySelector("#btn-html");

buttonEl.addEventListener("click", function () {
  const divEl = document.querySelector("#result");
  const textEl = document.createTextNode("This text was inserted from JavaScript");
  divEl.appendChild(textEl);
  buttonEl.disabled = true;
});
