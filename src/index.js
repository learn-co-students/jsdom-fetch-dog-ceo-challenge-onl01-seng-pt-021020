console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
    fetchDogPics();
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