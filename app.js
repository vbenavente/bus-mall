var randomImages = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];
var bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass;
var storeObjectsArray = [];
var totalClicks = 0;

function getRandomImage(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ImageData(name, src){
  this.name = name;
  this.src = src;
  this.timesdisplayed = 0;
  this.timesClicked = 0;
}

//SurveyImage.prototype.renderImage = function (){

var imageLeft = document.createElement('img');

var imageMiddle = document.createElement('img');

var imageRight = document.createElement('img');

var selectImage1 = randomImages[getRandomImage(0,19)];

var selectImage2 = randomImages[getRandomImage(0,19)];
var selectImage3 = randomImages[getRandomImage(0,19)];
var choice1 = document.getElementById('image1');
//choice1.textContent = 'img/bag.jpg';
var choice2 = document.getElementById('image1');
var choice3 = document.getElementById('image1');

function placeImage(idtag){
  imageLeft.setAttribute('src', selectImage1);
  console.log(selectImage1);
  choice1.appendChild(imageLeft);
  imageMiddle.setAttribute('src', selectImage2);
  console.log(selectImage2);
  choice2.appendChild(imageMiddle);
  imageRight.setAttribute('src', selectImage3);
  console.log(selectImage3);
  choice3.appendChild(imageRight);
}

function deleteImages(image){
  choice1.removeChild(imageLeft);
  choice2.removeChild(imageMiddle);
  choice3.removeChild(imageRight);
}

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

placeImage('image1');

function collectTrackerDataFromClick(event){
  totalClicks++;
  console.log('event.target: ', event.target);
  for(var i = 0; i < storeObjectsArray.length; i++){
    if(storeObjectsArray[i].name === event.target.id){
      storeObjectsArray[i].timesClicked++;
    }
  }
  if (totalClicks < 25){
    deleteImages(imageLeft, imageMiddle, imageRight);
    placeImage('image1');
  } else{
    deleteImages(imageLeft, imageMiddle, imageRight);
  }
}

var trackImages = document.getElementById('gamepage');
trackImages.addEventListener('click', collectTrackerDataFromClick);
