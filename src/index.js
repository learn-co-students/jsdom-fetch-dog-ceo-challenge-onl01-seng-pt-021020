console.log('%c HI', 'color: firebrick')

let breeds = [];

document.addEventListener('DOMContentLoaded', function () {
  loadImages();
  loadBreedOptions();
});

//First challenge:
//Add JS so that on page load, fetch images using given URL,
//parse the response as JSON
//add the image elements to the DOM for each image in the array

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(res=> res.json())
    //function (response) {return response.json()};
    .then(results => {
      results.message.forEach(image => addImage(image))
      //function (results) {results.message.forEach(image => addImage(image))}
    });
}

function addImage(dogPicUrl) {
  let container = document.querySelector('#dog-image-container');
  let newImageElement = document.createElement("img");
  newImageElement.src = dogPicUrl;
  container.appendChild(newImageElement);
}

//Second Challenge:
//On page load, fetch all the dog breeds with the given url
//add the breeds to the page in <ul> tags

function loadBreedOptions() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  fetch(breedUrl);
  .then(response => response.json());
  .then(results => {
    let breeds = Object.keys(results.message);
    updateBreedList(breeds);
    addBreedSelectListener();
  });
}

function updateBreedList(breeds) {
  let ul = document.querySelector('#dog-breeds')
  removeChildren(ul);
  breeds.forEach(breed => addBreed(breed));
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

function selectBreedsStartingWith(letter) {
  updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreedSelectListener() {
  let breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', function (event) {
    selectBreedsStartingWith(event.target.value);
  });
}

function addBreed(breed) {
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  li.innerText = breed;
  li.style.cursor = 'pointer';
  ul.appendChild(li);
  li.addEventListener('click', updateColor);
}

function updateColor(event) {
  event.target.style.color = 'palevioletred';
}
