import {printToDom} from "../helpers/util.js";

// i know i need this but not sure why
let pets = [];

const setPets = (newArray) => {
    pets = newArray;
}

const petBuilder = () => {
    console.log(pets);
}

export {petBuilder, setPets}