
/* A multiple line comment 
can be done like this.
It's so useful.
*/

const cpfPointInput = document.querySelector('#cpf-point');
const cpfNoFormatEl = document.querySelector('#cpf-noformat');

cpfPointInput.addEventListener('keyup', function() { 
  cpfNoFormatEl.innerHTML = cpfPointInput.value.replace(/\D/g, "");
});
