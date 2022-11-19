const cpfInput = document.querySelector('#cpf');
const cpfFormatadoEl = document.querySelector('#cpf-formatado');

cpfInput.addEventListener('keyup', function() {
  let cpfFormatado = cpf(cpfInput.value);

  cpfInput.value = cpfInput.value.replace(/\D/g, "");
  cpfFormatadoEl.innerHTML = cpfFormatado;
})

function cpf(value) {
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1-$2");

  return value;
}
