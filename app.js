
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgUrl = "https://dog.ceo/api/breeds/image/random/6"

fetch(imgUrl).then(response => {
response.json().then( data => imageRender(data)
)})

function imageRender(data) {
  
  console.log(data);
  dogImages = data.message;
  imgContainer = document.getElementById("dog-image-container")
  for (let i=0; i<dogImages.length; i++) {
    let renderImage = document.createElement("img");
    renderImage.src = dogImages[i];
    renderImage.width = "400";
    renderImage.height = "200";
    imgContainer.appendChild(renderImage)
  }
}

fetch(breedUrl).then(response => {
response.json().then( data => breedRender(data)
)})

function breedRender(data) {
  allDogBreeds = Object.keys(data.message);
   ul = document.getElementById("dog-breeds");
   ul.innerHTML = "<h1>all breeds</h1>";
   for (let i=0; i<allDogBreeds.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = allDogBreeds[i];
    ul.appendChild(li)
   }
}



function changeList(value, dogArrays = allDogBreeds) {
  let newArray = [];
  
  for (let i=0; i<dogArrays.length; i++) {
    if (dogArrays[i][0] === value) {
      newArray.push(dogArrays[i]);
    }
    else if (value === " ")
      {
        newArray.push(dogArrays[i])
      }

  }
 
  return newArray;
};

 dropdown = document.getElementById("breed-dropdown")
  ul = document.getElementById("dog-breeds");

  dropdown.addEventListener("change", () =>{
 
    ul.innerHTML = ""
    let newArray = changeList(dropdown.value, allDogBreeds);
    for (let i =0; i<newArray.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = newArray[i];
      ul.appendChild(li);
    }
  })


  

  
  setInterval(
function () {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
 dropdown.style.backgroundColor = "#"+randomColor;
},1000);




  
 

 
    
