window.onload = function () {
  const theDiv = document.querySelector("#result");
  const textEl = document.createTextNode("This text was inserted from JavaScript");
  theDiv.appendChild(textEl);
};