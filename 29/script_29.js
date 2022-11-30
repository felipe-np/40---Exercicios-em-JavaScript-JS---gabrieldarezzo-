const resultadoEl = document.querySelector("#resultado");
let i = 0

do {
  resultadoEl.innerHTML += `${(i + 1)} ` ;
  i++;
} while (i < 10);

