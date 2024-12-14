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

 function findCityId(userInput) {
    let cityInArray = null;
 
 
    for (let city of cities) {
        if (city.name.toLocaleLowerCase() === userInput.toLocaleLowerCase()) {
            cityInArray = city.id;
            break;
        }
    }
 
 
    return cityInArray;
 }
 
 
 const cityId = findCityId(userInput);

 function findFurthestAndClosestCity(cityId) {
    let furthestDistance = 0;
    let closestDistance = 10000;
    let furthestCity = null;
    let closestCity = null;
    let closestCityId;
    let furthestCityId;
 
 
    for (let distance of distances) {
        if (cityId === distance.city1 || cityId === distance.city2) {
            if (distance.distance > furthestDistance) {
                furthestDistance = distance.distance;
                furthestCity = distance;
            }
            if (distance.distance < closestDistance) {
                closestDistance = distance.distance;
                closestCity = distance;
            }
        }
    }
 
 
    if (closestCity) {
        closestCityId = (cityId === closestCity.city1) ? closestCity.city2 : closestCity.city1;
    }
 
 
    if (furthestCity) {
        furthestCityId = (cityId === furthestCity.city1) ? furthestCity.city2 : furthestCity.city1;
    }
 
 
    return {
        furthestCity,
        closestCity,
        closestCityId,
        furthestCityId
    };
 }


 function highlightCityBlack(cityId) {
    let cityDiv = document.querySelector(`#city-${cityId}`);
    if (cityDiv) {
        cityDiv.classList.add("target");
    }
 }
 
 function highlightCityGreen(cityId, distance) {
    let closestCityName;
    let theDistance = distance.distance / 10;
    let textId = document.querySelector("#closest");
 
 
    for (let city of cities) {
        if (cityId == city.id) {
            closestCityName = city.name;
            break;
        }
    }
 
 
    let cityDiv = document.querySelector(`#city-${cityId}`);
    if (cityDiv) {
        cityDiv.classList.add("closest");
        cityDiv.textContent = `${closestCityName} ligger ${theDistance} mil bort`;
    }
 
 
    textId.textContent = (closestCityName);  
 }

 function highlightCityBlue(cityId, distance) {
    let furthestCityName;
    let theDistance = distance.distance / 10;
    let textId = document.querySelector("#furthest");
 
 
    for (let city of cities) {
        if (cityId == city.id) {
            furthestCityName = city.name;
            break;
        }
    }
 
 
    let cityDiv = document.querySelector(`#city-${cityId}`);
    if (cityDiv) {
        cityDiv.classList.add("furthest");
        cityDiv.textContent = `${furthestCityName} ligger ${theDistance} mil bort`;
    }
 
 
    textId.textContent = (furthestCityName); 
 }
 
 
 function displayCityDistances() {
    let container = document.getElementById("table");
    let headerRow = "<div class='cell'></div>";
    for (let i = 0; i < cities.length; i++) {
        headerRow += "<div class='cell head_column'>" + i + "</div>";
    }
    container.innerHTML = headerRow;
    for (let i = 0; i < cities.length; i++) {
        let city = cities[i];
        let row = "<div class='cell head_row'>" + city.id + " - " + city.name + "</div>";
 
 
        for (let j = 0; j < cities.length; j++) {
            let otherCity = cities[j];
            let dist = null;
            for (let d = 0; d < distances.length; d++) {
                if (
                    (distances[d].city1 === city.id && distances[d].city2 === otherCity.id) ||
                    (distances[d].city1 === otherCity.id && distances[d].city2 === city.id)
                ) {
                    dist = distances[d].distance;
                    break;
                }
            }
            let cellClass = (i % 2 === 0 ? 'even_row' : '') + ' ' + (j % 2 === 0 ? 'even_col' : '');
            row += "<div class='cell " + cellClass + "'>" + (dist ? (dist / 10).toFixed(0) : "") + "</div>";
        }
        container.innerHTML += row;
    }
 }
 displayCityDistances();

 if (isCityFound) {
    highlightCityBlack(cityId);
    const result = findFurthestAndClosestCity(cityId);
    highlightCityGreen(result.closestCityId, result.closestCity);
    highlightCityBlue(result.furthestCityId, result.furthestCity);
 }
 

























