const birthdayInput = document.querySelector("#birthday");
const ageResult = document.querySelector("#age-result");

birthdayInput.addEventListener("input", function() {
  if ((getAge(birthdayInput.value)) >= 18) {
    ageResult.innerHTML = "Above minimal age";
  } else {
    ageResult.innerHTML = "Below minimal age";
  }
});

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  
  return age;
}