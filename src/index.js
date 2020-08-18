console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breeds = []

document.addEventListener('DOMContentLoaded', function() {
    getimg();
    getAllDogs();
});

function getimg() {
    fetch(imgUrl).then(resp => resp.json()).then(json => renderImg(json));
}

function renderImg(images) {
    let newImageEl = document.createElement('img');
    images.message.forEach(image => {
        const imgContainer = document.getElementById("dog-image-container");
        newImageEl.src = image;
        imgContainer.appendChild(newImageEl);
    });
}

function getAllDogs() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl).then(resp => resp.json()).then(json => renderDogBreeds(json));
}

function renderDogBreeds(jsonbreeds) {
    breeds = Object.keys(jsonbreeds.message);
    updateBreedList(breeds)
    addBreedSelectListener();
}

function updateBreedList(breedsObj) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breedsObj.forEach(breed => { addBreed(breed) })
}

function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed
    li.style.cursor = 'pointer';
    ul.appendChild(li)
    li.addEventListener('click', updateColor);
}

function selectBreedsStartingWith(letter) {

    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', event => {
        selectBreedsStartingWith(event.target.value);
    });
}

function updateColor() {
    event.target.style.color = "#E68784";
}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}