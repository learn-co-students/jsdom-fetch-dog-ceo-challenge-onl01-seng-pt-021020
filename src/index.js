console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
    fetchDogPics();
    fetchDogBreeds();
})

function fetchDogPics(){
    const dogPicsUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(dogPicsUrl)
    .then(response => response.json())
    .then(json => {
        json.message.forEach(image => renderDogs(image))
    });
}

function renderDogs(dogPicsUrl){
    const images = document.getElementById("dog-image-container");
    let newPic = document.createElement('img');
    newPic.src = dogPicsUrl;
    images.appendChild(newPic);
}

function fetchDogBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(response => response.json())
    .then(json => {
        breeds = Object.keys(json.message);
        renderBreeds(breeds);
        addBreedSelectListener();
    });
}

function renderBreeds(breeds){
    breedList = document.getElementById("dog-breeds");
    breedList.innerHTML = '';
    breeds.forEach(breed => addBreed(breed));
}

function sortByLetter(letter){
    renderBreeds(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
        sortByLetter(event.target.value);
        });
}

function addBreed(breed){
    let breedList = document.getElementById("dog-breeds");
    let dogList = document.createElement('li');
    dogList.innerText = breed;
    breedList.appendChild(dogList);
    dogList.style.cursor = 'pointer';
    dogList.addEventListener('click', changeColor);
}

function changeColor(event){
    event.target.style.color = 'aqua';
}