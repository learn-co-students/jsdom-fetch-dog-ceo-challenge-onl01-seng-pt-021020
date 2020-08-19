console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
let breeds = [];

function fetchImages() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImage(json));
}

function renderImage(json) {
    let div = document.getElementById('dog-image-container');
    json.message.forEach(image => {
        let img = document.createElement('img');
        img.src = image;
        div.append(img);
    }); 
};

function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
}

function renderBreeds(json) {
    let ul = document.getElementById('dog-breeds');
    //Pushing dog breeds to array
    for (let breed in json.message) {
        if (json.message[breed].length > 0) {
            json.message[breed].forEach(subBreed => {
                breeds.push(`${subBreed} ${breed}`);
            })
        }
        else {
            breeds.push(`${breed}`);
        }
    }
    //Creating dog breed list elements
    breeds.sort()
    breeds.forEach(breed => {
        let li = document.createElement('li');
        li.innerHTML = `${breed}`
        li.className = "breed"
        ul.appendChild(li);
    });
    //Changing list elements to green upon 'click'
    ul.addEventListener('click', function(event) {
        event.target.style.color = 'green'; 
    });
}

function sortBreedsByLetter() {
    let dropDown = document.getElementById('breed-dropdown');
    dropDown.value = '';
    dropDown.addEventListener('change', event => {
        let ul = document.getElementById('dog-breeds');
        document.querySelectorAll('.breed').forEach(li => {
            if (li.innerText.toLowerCase().charAt(0) == event.target.value) {
                li.style.display = "list-item";
            }
            else if (dropDown.value == '') {
                li.style.display = "list-item"
            }
            else {
                li.style.display = "none";
            }
        });
    })
}

document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchBreeds();
    sortBreedsByLetter();
});


