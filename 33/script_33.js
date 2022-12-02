let x
let min = Math.ceil(1000);
let max = Math.floor(1)

window.onload = (event) => { 
   x =  (Math.random() * (max - min) + min).toFixed(2) ;
   alert(x);
};
