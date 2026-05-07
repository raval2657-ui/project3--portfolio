// script.js

function showMessage() {
  alert("Welcome to my Cloud Resume Project!");
}

/* Temporary visitor counter */

let count = localStorage.getItem("visitorCount");

if(count === null){
  count = 0;
}

count++;

localStorage.setItem("visitorCount", count);

document.getElementById("visitor-count").innerText =
  "Visitors: " + count;