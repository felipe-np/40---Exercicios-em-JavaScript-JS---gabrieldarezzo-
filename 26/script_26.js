const resultadoEl = document.querySelector("#resultado")
const array1 = ["Repetição ","Repetição ","Repetição ","Repetição ","Repetição"];

array1.forEach((text) => {
  resultadoEl.innerHTML += text;
});


