const button = document.querySelector("#btn-show-name");

button.addEventListener("click", function() {
  const fullName = document.querySelector("#full-name").value;
  
  alert(`A quantidade de letras do seu nome é: ${fullName.length}`);
})
