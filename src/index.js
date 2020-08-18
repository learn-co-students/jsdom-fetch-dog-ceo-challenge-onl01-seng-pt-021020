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
    });
}

function renderBreeds(breeds){
    const breedList = document.getElementById("dog-breeds");
    breeds.forEach(breed => addBreed(breed));
}

function addBreed(breed){
    let breedList = document.getElementById("dog-breeds");
    let dogList = document.createElement('li');
    dogList.innerText = breed;
    breedList.appendChild(dogList);
       
}