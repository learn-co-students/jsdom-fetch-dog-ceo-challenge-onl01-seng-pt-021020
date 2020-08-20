console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener('DOMContentLoaded', getImg());

function getImg() {
    fetch(imgUrl)
        .then(function(resp) {
            return resp.json()
        })
        .then(function(arr) {
            // console.log(arr)
            addImg(arr)
        })
}

function addImg(imgArr) {
    const divTag = document.getElementById('dog-image-container');
    imgArr.message.forEach(e => {
        const img = document.createElement("img");
        img.setAttribute("height", "250");
        img.setAttribute("width", "250");
        img.src = e
        divTag.appendChild(img);
    });
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', getBreeds());

function getBreeds() {
    fetch(breedUrl)
    .then(function(resp) {
        return resp.json()
    })
    .then(function(arr) {
        // console.log(arr.message)
        addBreeds(arr)
    })
}

function addBreeds(breedArr) {
    debugger
    const list = document.getElementById('dog-breeds')
    breedArr.message.forEach(e => {
        const li = document.createElement('li');
        li.innerText = e
        list.appendChild(li);
    });
}
