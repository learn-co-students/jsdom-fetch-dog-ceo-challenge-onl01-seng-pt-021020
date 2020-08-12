console.log('%c HI', 'color: firebrick')

window.addEventListener('DOMContentLoaded', () => {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(json => addImagesToDOM(json['message']))
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(json => listDogBreeds(json['message']))
  
  const filterSelector = document.querySelector('select#breed-dropdown')
  filterSelector.oninput = filterResults

  function addImagesToDOM(imageURLs) {
    const dogImageContainer = document.querySelector('div#dog-image-container')

    imageURLs.forEach(url => {
      const img = document.createElement('img')

      img.src = url

      dogImageContainer.appendChild(img)
    });
  }

  function listDogBreeds(breedsHash) {
    const dogBreeds = document.querySelector('ul#dog-breeds')

    Object.keys(breedsHash).forEach((breed, index) => {
      const subbreeds = breedsHash[breed]

      let listItem = document.createElement('li')
      listItem.innerText = breed
      listItem.addEventListener('click', changeColor)
      dogBreeds.appendChild(listItem)

      if (subbreeds.length > 0) {
        ul = document.createElement('ul')
        dogBreeds.appendChild(ul)

        subbreeds.forEach(subbreed => {
          subListItem = document.createElement('li')
          subListItem.innerText = subbreed
          subListItem.addEventListener('click', changeColor)

          ul.appendChild(subListItem)
        })
      }
    })
  }

  function changeColor() {
    const liColors = ['red', 'green', 'black', 'blue']
    this.style.color = liColors[Math.floor(Math.random() * liColors.length)]
  }

  function filterResults() {
    const letter = filterSelector.value
    const allLis = Array.from(document.querySelectorAll('li'))
    const goodLis = allLis.filter(li => li.innerText.startsWith(letter))
    const badLis = allLis.filter(li => !li.innerText.startsWith(letter))
    
    goodLis.forEach(li => li.hidden = false)
    badLis.forEach(li => li.hidden = true)
  }
})