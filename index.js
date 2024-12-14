"use strict"


const h2Element = document.querySelector("h2");
const cityNameTable = document.querySelector("#cities");
const h3Element = document.querySelector("h3");


let userInput = prompt("Skriv in en stad");


function createBoxes() {
    for (let i = 0; i < cities.length; i++) {
        let cityDiv = document.createElement("div");
        cityNameTable.appendChild(cityDiv);
        cityDiv.classList.add("cityBox");
        cityDiv.textContent = cities[i].name;
        cityDiv.id = `city-${cities[i].id}`; 
    }
 }
 createBoxes();



























