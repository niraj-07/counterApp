let increment = document.getElementById("increase");
let counter = document.getElementById("numberRep");
let history = document.getElementById("data");
let count = 0;
function increase(){
   count += 1;
   counter.textContent = count;
}
function decrease(){
   count -=1
   counter.textContent = count;
}
function initial(){
 count= 0;
 counter.textContent = count;
}
function record(){
   history.textContent += count + " - " 
   count = 0;
   counter.textContent = count;
}