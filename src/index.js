// load Content
window.addEventListener('DOMContentLoaded', (e) => {


    // functions
    getImages();
    getBreeds();
});

// loads images
function getImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    return fetch(imgUrl)
        .then(reponse => reponse.json())
        .then(json => {
            json.message.forEach(dog => {
                let dogImages = document.getElementById('dog-image-container')
                let p = document.createElement('p')
                p.innerHTML = `<img src='${dog}' width='300px' height='250px'>`;
                dogImages.appendChild(p);
            });
        })
}

// loads breeds
function getBreeds() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    return fetch(breedUrl)
        .then(reponse => reponse.json())
        .then(json => {
            const breeds = Object.keys(json.message)
            filterBreeds(breeds)
        })
}

// filter breeds
function filterBreeds(breeds) {
const dropDown = document.getElementById('breed-dropdown');
dropDown.addEventListener('change', function(e) {
        const value = e.target.value
        const filteredBreeds = breeds.filter( breed => breed.startsWith(value))
            filteredBreeds.forEach(dog => {
                let ul = document.getElementById('dog-breeds')
                let li = document.createElement('li')
                li.innerText = dog;
                ul.appendChild(li);
                li.addEventListener('click', function() {
                    li.style.color = 'red';
                })
                dropDown.addEventListener('click', function() {
                    let ul = document.getElementById('dog-breeds')
                    while (ul.lastElementChild) {
                        ul.removeChild(ul.lastElementChild);
                    }
                })
            })
})}