console.log('%c HI', 'color: firebrick');

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

document.addEventListener('DOMContentLoaded', function() {
  
  let allBreeds = []
  const dropDown = document.getElementById("breed-dropdown");
  const ul = document.getElementById('dog-breeds');
  const li = document.createElement('li');
  const div = document.getElementById('dog-image-container');
  ul.style.cursor = 'pointer';
  
  fetch(imgUrl).then((response) => response.json()).then((json) => renderImg(json['message']));
  fetch(breedUrl).then((response) => response.json()).then((breedData) => {
    allBreeds = Object.keys(breedData.message)
      ul.innerHTML = dogBreedList(allBreeds)
  });
  
  dropDown.addEventListener('change', function (event) {
    firstLetter = event.target.value
    const filterBreed = allBreeds.filter((breed) => breed.startsWith(firstLetter)) 
    ul.innerHTML = dogBreedList(filterBreed)
  });

  ul.addEventListener('click', function(event){
    let color = '#' + ((Math.random() * (1 << 24)) | 0).toString(16);
    event.target.style.color = color;
  })

  function renderImg(urls) {
    urls.forEach((url) => {
      const div2 = document.createElement('div'),
        img = document.createElement('IMG');
      (img.src = url), (div2.id = 'gallery');
      div2.appendChild(img), div.appendChild(div2);
    });
  }

  function dogBreedList(breedList){
    const liArray = breedList.map(function(breed){
      return `<li>${breed}</li>`
    })
    return liArray.join('')
  }
});
