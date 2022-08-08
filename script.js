// Daniel O, Daniel E, Zion S.

let imageCaption = document.querySelector("p");

let requestURL = "https://api.imgflip.com/get_memes";

console.log(requestURL);

function displayPhoto(data){
    let memes = data.data.memes[randInt(100)];
    let imgLink = memes.url;
    
    console.log(imgLink);
    
    let allPhotos = data.data;
    let imageContainer = document.querySelector("img");
    imageContainer.src = imgLink;

    let imageTitle = document.querySelector("h1");

    imageTitle.innerHTML = memes.name;

    let button = document.querySelector("a");
    button.href = imgLink;





}

function randInt(upperLimit){
    return Math.floor(Math.random() * upperLimit);
}

fetch(requestURL)
    .then(function (response) {

        //converts web page into a javascritpt object

        return response.json();
    })

    //called with the object as a parameter once it's converted
    //things we want to do after data is available

    .then(displayPhoto)
    .catch(function (error) {

        //Print out any errors

        console.log("Error during fetch:", error);
    });