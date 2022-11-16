const lightOffSource = "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/lampada.jpg";

const lightOnSource = "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/lampada-on.jpg"

const lightBulbImg = document.querySelector("#light-bulb");

lightBulbImg.addEventListener("click", function() {
  if (lightBulbImg.src === lightOffSource) {
    lightBulbImg.src = lightOnSource;
  } else {
    lightBulbImg.src = lightOffSource;
  }
})