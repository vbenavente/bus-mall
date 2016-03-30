var randomImages = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];
var bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass;
var storeObjectsArray = [];

function getRandomImage(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ImageData(name, src){
  this.name = name;
  this.src = src;
  this.timesdisplayed = 0;
  this.timesClicked = 0;
}

function collectTrackerDataFromClick(event){
  console.log('event.target: ', event.target);
}
var trackImages = document.getElementById('gamepage');
trackImages.addEventListener('click', collectTrackerDataFromClick);

//SurveyImage.prototype.renderImage = function (){

var position = document.getElementById('image1');
//position1.textContent = 'img/bag.jpg';
var imageLeft = document.createElement('img');
var position2 = document.getElementById('image1');
var imageMiddle = document.createElement('img');
var position3 = document.getElementById('image1');
var imageRight = document.createElement('img');

function placeImage(idtag){
  var selectImage1 = randomImages[getRandomImage(0,19)];
  imageLeft.setAttribute('src', selectImage1);
  console.log(selectImage1);
  var choice1 = document.getElementById(idtag);
  choice1.appendChild(imageLeft);

  var selectImage2 = randomImages[getRandomImage(0,19)];
  imageMiddle.setAttribute('src', selectImage2);
  console.log(selectImage2);
  var choice2 = document.getElementById(idtag);
  choice2.appendChild(imageMiddle);

  var selectImage3 = randomImages[getRandomImage(0,19)];
  imageRight.setAttribute('src', selectImage3);
  console.log(selectImage3);
  var choice3 = document.getElementById(idtag);
  choice3.appendChild(imageRight);
}

bag = new ImageData('bag', 'img/bag.jpg');
banana = new ImageData('banana', 'img/banana.jpg');
bathroom = new ImageData('bathroom', 'img/bathroom.jpg');
boots = new ImageData('boots', 'img/boots.jpg');
breakfast = new ImageData('breakfast', 'img/breakfast.jpg');
bubblegum = new ImageData('bubblegum', 'img/bubblegum.jpg');
chair = new ImageData('chair', 'img/chair.jpg');
cthulhu = new ImageData('cthulhu', 'img/cthulhu.jpg');
dogduck = new ImageData('dogduck', 'img/dog-duck.jpg');
dragon = new ImageData('dragon', 'img/dragon.jpg');
pen = new ImageData('pen', 'img/pen.jpg');
petsweep = new ImageData('petsweep', 'img/pet-sweep.jpg');
scissors = new ImageData('scissors', 'img/scissors.jpg');
shark = new ImageData('shark', 'img/shark.jpg');
sweep = new ImageData('sweep', 'img/sweep.png');
tauntaun = new ImageData('tauntaun', 'img/tauntaun.jpg');
unicorn = new ImageData('unicorn', 'img/unicorn.jpg');
usb = new ImageData('usb', 'img/usb.gif');
watercan = new ImageData('watercan', 'img/water-can.jpg');
wineglass = new ImageData('wineglass', 'img/wine-glass.jpg');

placeImage('image1');
