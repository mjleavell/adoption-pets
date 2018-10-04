import {printToDom} from "../helpers/util.js";

// i know i need this but not sure why
let pets = [];

const setPets = (newArray) => {
    pets = newArray;
}

const petBuilder = () => {
    let domString = ""
    for (let i = 0; i < pets.length; i++) {
        domString += `<div class="card text-center m-3" style="width: 18rem;">`
        domString +=    `<div class="card-header">`
        domString +=    `<h3>${pets[i].name}</h3>`
        domString +=    `</div>`
        domString +=    `<div class="card-body">`
        domString +=        `<img class="card-img-top" src="${pets[i].imageUrl}" alt="${pets[i].name}">`
        domString +=        `<h5 class="card-text mt-1">${pets[i].color}</h5>`
        domString +=        `<h5 class="card-text">${pets[i].specialSkill}</h5>`
        domString +=    `</div>`
        domString +=    `<div class="card-footer text-${pets[i].text}" style="background-color: ${pets[i].background};">`
        domString +=        `<h3>${pets[i].type}</h3>`
        domString +=    `</div>`
        domString += `</div>`
    } 
    printToDom(domString, 'pets');
}

export {petBuilder, setPets}