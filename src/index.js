console.log('%c HI', 'color: firebrick');

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

document.addEventListener('DOMContentLoaded', function() {
	fetch(imgUrl).then((response) => response.json()).then((json) => addImages(json['message']));
	fetch(breedUrl).then((response) => response.json()).then((json) => addBreeds(json['message']));
});

// challenge 1
function addImages(urls) {
	const imgContainer = document.getElementById('dog-image-container');
	urls.forEach((url) => {
		const imgTag = document.createElement('img');
		imgTag.src = url;
		imgContainer.appendChild(imgTag);
	});
}

// challenge 2
function addBreeds(breeds) {
	const breedContainer = document.getElementById('dog-breeds');
	Object.keys(breeds).forEach((breed) => {
		const liTag = document.createElement('li');
		liTag.innerText = breed;
		liTag.addEventListener('click', changeColor);
		breedContainer.appendChild(liTag);
	});
}

// challenge 3
function changeColor() {
	this.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

// challenge 4
if (document.readyState === 'complete' || document.readyState === 'loaded' || document.readyState === 'interactive') {
	const dropdown = document.querySelector('#breed-dropdown');
	dropdown.addEventListener('change', () => {
		const breedContainer = document.getElementById('dog-breeds');
		for (let index = 0; index < breedContainer.children.length; index++) {
			breedContainer.children[index].style.display = 'initial';
			if (!breedContainer.children[index].innerText.startsWith(event.target.value))
				breedContainer.children[index].style.display = 'none';
		}
	});
}
