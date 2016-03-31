//Global Variables
var bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass;
var storeObjectsArray = [];
var totalClicks = 0;

//Object Constructor
function ImageData(name, src){
  this.name = name;
  this.src = src;
  this.timesdisplayed = 0;
  this.timesClicked = 0;
}

function getRandomImage(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createThreeImages(){
  var imageLeft = document.createElement('img');
  var imageMiddle = document.createElement('img');
  var imageRight = document.createElement('img');

  // create 3 random numbers
  // increment the objects displayedTime value at that index
  // we set selectImage1-3 to equal the object at the random number index
  var randomindex1 = getRandomImage(0,storeObjectsArray.length - 1);
  var randomindex2 = getRandomImage(0,storeObjectsArray.length - 1);
  var randomindex3 = getRandomImage(0, storeObjectsArray.length - 1);

  var selectImage1 = storeObjectsArray[randomindex1];
  var selectImage2 = storeObjectsArray[randomindex2];
  var selectImage3 = storeObjectsArray[randomindex3];

  storeObjectsArray[randomindex1].timesdisplayed++;
  storeObjectsArray[randomindex2].timesdisplayed++;
  storeObjectsArray[randomindex3].timesdisplayed++;

  imageLeft.setAttribute('src', selectImage1.src);
  imageLeft.setAttribute('id', selectImage1.name);
  imageLeft.addEventListener('click', collectTrackerDataFromClick);
  //console.log(imageLeft);
  imageMiddle.setAttribute('src', selectImage2.src);
  imageMiddle.setAttribute('id', selectImage2.name);
  imageMiddle.addEventListener('click', collectTrackerDataFromClick);
  //console.log(imageMiddle);
  imageRight.setAttribute('src', selectImage3.src);
  imageRight.setAttribute('id', selectImage3.name);
  imageRight.addEventListener('click', collectTrackerDataFromClick);
  //console.log(imageRight);

  return [imageLeft, imageMiddle, imageRight];
}

function placeImage(){
  var displayImages = document.getElementById('display-images');
  //below clears the image so a new one can be input
  displayImages.textContent = '';
  var imagesDisplayArray = createThreeImages();
  displayImages.appendChild(imagesDisplayArray[0]);
  displayImages.appendChild(imagesDisplayArray[1]);
  displayImages.appendChild(imagesDisplayArray[2]);
}

function createButtons(){
  var buttonResults = document.createElement('button');
  buttonResults.addEventListener('click', chart);
  var buttonMoreClicks = document.createElement('button');
  buttonMoreClicks.addEventListener('click', placeImage, totalClicks++);

  return [buttonResults, buttonMoreClicks];
}

//add my chart, this function runs when buttonResults is clicked
function chart(){
  console.log('poop');
}

function placeButtons(){
  var displayButtons = document.getElementById('display-buttons');
  displayButtons.textContent = '';
  var buttonsDisplayArray = createButtons();
  displayButtons.appendChild(buttonsDisplayArray[0]);
  buttonsDisplayArray[0].textContent = 'See Results!';
  displayButtons.appendChild(buttonsDisplayArray[1]);
  buttonsDisplayArray[1].textContent = 'Give Me 10 More Clicks';
}

//.push is a method on the array
bag = storeObjectsArray.push(new ImageData('bag', 'img/bag.jpg'));
banana = storeObjectsArray.push(new ImageData('banana', 'img/banana.jpg'));
bathroom = storeObjectsArray.push(new ImageData('bathroom', 'img/bathroom.jpg'));
boots = storeObjectsArray.push(new ImageData('boots', 'img/boots.jpg'));
breakfast = storeObjectsArray.push(new ImageData('breakfast', 'img/breakfast.jpg'));
bubblegum = storeObjectsArray.push(new ImageData('bubblegum', 'img/bubblegum.jpg'));
chair = storeObjectsArray.push(new ImageData('chair', 'img/chair.jpg'));
cthulhu = storeObjectsArray.push(new ImageData('cthulhu', 'img/cthulhu.jpg'));
dogduck = storeObjectsArray.push(new ImageData('dogduck', 'img/dog-duck.jpg'));
dragon = storeObjectsArray.push(new ImageData('dragon', 'img/dragon.jpg'));
pen = storeObjectsArray.push(new ImageData('pen', 'img/pen.jpg'));
petsweep = storeObjectsArray.push(new ImageData('petsweep', 'img/pet-sweep.jpg'));
scissors = storeObjectsArray.push(new ImageData('scissors', 'img/scissors.jpg'));
shark = storeObjectsArray.push(new ImageData('shark', 'img/shark.jpg'));
sweep = storeObjectsArray.push(new ImageData('sweep', 'img/sweep.png'));
tauntaun = storeObjectsArray.push(new ImageData('tauntaun', 'img/tauntaun.jpg'));
unicorn = storeObjectsArray.push(new ImageData('unicorn', 'img/unicorn.jpg'));
usb = storeObjectsArray.push(new ImageData('usb', 'img/usb.gif'));
watercan = storeObjectsArray.push(new ImageData('watercan', 'img/water-can.jpg'));
wineglass = storeObjectsArray.push(new ImageData('wineglass', 'img/wine-glass.jpg'));

placeImage();

function collectTrackerDataFromClick(event){
  totalClicks++;
  console.log('event.target: ', event.target);
  console.table(storeObjectsArray);
  for(var i = 0; i < storeObjectsArray.length; i++){
    if(storeObjectsArray[i].name === event.target.id){
      storeObjectsArray[i].timesClicked++;
    }
  }
  if (totalClicks < 25 ){
    placeImage();
  } else if (totalClicks = 25){
    var displayImages = document.getElementById('display-images');
    displayImages.textContent = '';
    placeButtons();
  } else if(25 < totalClicks < 36){
    placeImage();
  } else {
    chart();
  }
}
