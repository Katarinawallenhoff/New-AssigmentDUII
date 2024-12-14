"use strict"


const h2Element = document.querySelector("h2");
const cityNameTable = document.querySelector("#cities");
const h3Element = document.querySelector("h3");


let userInput = prompt("Skriv in en stad");


function cityNames() {
   let cityNameArray = [];
   for (let city of cities) {
       cityNameArray.push(city.name);
   }
   return cityNameArray;
}


let cityArray = cityNames();



























