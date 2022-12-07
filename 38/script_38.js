var deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr']

const ulTag = document.querySelector("#nomes");

for (let index = 0; index < deuses.length; index++) {
  createElements(deuses[index]);
};

 function createElements (value) {
  let ilTag = document.createElement("li");
  ulTag.appendChild(ilTag);
  ilTag.innerHTML = value
 };

