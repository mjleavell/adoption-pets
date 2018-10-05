import {sortPets} from "./components/petComponent.js";

const sortEvents = () => {
    const dogBtn = document.getElementById('Dogs');
    const catBtn = document.getElementById('Cats');
    const dinoBtn = document.getElementById('Dinos');
    const unfilterBtn = document.getElementById('Unfilter');
    dogBtn.addEventListener('click', sortPets);
    catBtn.addEventListener('click', sortPets);
    dinoBtn.addEventListener('click', sortPets);
    unfilterBtn.addEventListener('click', sortPets);
}

export {sortEvents}