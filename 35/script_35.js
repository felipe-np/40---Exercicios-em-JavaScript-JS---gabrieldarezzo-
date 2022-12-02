
const dateElement = document.querySelector("#result");

let today = new Date();

const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

let dd = String(day).padStart(2, "0");
let mm = String(month).padStart(2, "0");

today = dd + "/" + mm + "/" + year;

dateElement.innerHTML = today;
