const dateElement = document.querySelector("#result");

let today = new Date();

const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

let dd = String(day).padStart(2, "0");
let mm = String(month).padStart(2, "0");

today = dd + "/" + mm + "/" + year;

const nextMonth = month > 11 ? month % 11 : month + 1;

const newDate = new Date();
newDate.setMonth(nextMonth - 1);

dateElement.innerHTML = `Today date is ${today}. Next month is ${newDate.toLocaleString('en-US', { month: 'long' })}.`
