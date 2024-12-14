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


 function findCity(userInput) {
    let cityFound = false;
    for (let city of cities) {
        if (userInput.toLowerCase() === city.name.toLowerCase()) {
            h2Element.textContent = `${city.name} (${city.country})`;
            cityFound = true;
            document.title = `${city.name}`;
            break;
        }
    }
 
 
    if (!cityFound) {
        h2Element.textContent = `${userInput} finns inte i databasen`;
        document.title = `Not found`;
        h3Element.textContent = ""; 
    }
 
 
    return cityFound;
 }
 
 
 const isCityFound = findCity(userInput);



























