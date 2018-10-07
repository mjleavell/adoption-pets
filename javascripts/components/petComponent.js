import {printToDom} from "../helpers/util.js";

let pets = [];

const setPets = (newArray) => {
    pets = newArray;
}

// need to get populated pets array 
const getPetz = () => {
    return pets;
}

const petBuilder = (petsArray) => {
    let domString = ""
    for (let i = 0; i < petsArray.length; i++) {
        domString += `<div class="card text-center m-3" style="width: 18rem;">`
        domString +=    `<div class="card-header">`
        domString +=    `<h3>${petsArray[i].name}</h3>`
        domString +=    `</div>`
        domString +=    `<div class="card-body">`
        domString +=        `<img class="card-img-top" src="${petsArray[i].imageUrl}" alt="${petsArray[i].name}">`
        domString +=        `<h5 class="card-text mt-1">${petsArray[i].color}</h5>`
        domString +=        `<h5 class="card-text">${petsArray[i].specialSkill}</h5>`
        domString +=    `</div>`
        domString +=    `<div class="card-footer text-${petsArray[i].text}" style="background-color: ${petsArray[i].background};">`
        domString +=        `<h3>${petsArray[i].type}</h3>`
        domString +=    `</div>`
        domString += `</div>`
    } 
    printToDom(domString, 'pets');
}

const sortPets = (e) => {
    const buttonId = e.target.id;
    if (buttonId === 'unfilter') {
        petBuilder(pets);
    } else {
        const filteredPets = pets.filter(x => x.type === buttonId);
        petBuilder(filteredPets);
    }
}

export {petBuilder, setPets, sortPets, getPetz}