const resultadoEl = document.querySelector("#resultado");
let i = 0

do {
  i++;
  if (i % 2 === 0) {
    resultadoEl.innerHTML += `${i} `;
  };
} while (i < 20);
