import {sortPets} from "./components/petComponent.js";

const sortEvents = () => {
    const dogBtn = document.getElementById('Dog');
    const catBtn = document.getElementById('Cat');
    const dinoBtn = document.getElementById('Dino');
    const unfilterBtn = document.getElementById('Unfilter');
    dogBtn.addEventListener('click', sortPets);
    catBtn.addEventListener('click', sortPets);
    dinoBtn.addEventListener('click', sortPets);
    unfilterBtn.addEventListener('click', sortPets);
}

export {sortEvents}