const resultadoEl = document.querySelector("#resultado");

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    createElements(i, j);
  }
};

function createElements(i, j) {
  const pTag = document.createElement("p");
  const pText = document.createTextNode(`${i} x ${j} = ${i * j}`);
  const brTag = document.createElement("br");

  pTag.appendChild(pText);
  resultadoEl.appendChild(pTag);
  resultadoEl.appendChild(brTag);
}
