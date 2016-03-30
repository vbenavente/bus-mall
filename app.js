var randomImages = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.jpg', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];
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
//storeObjectsArray.push(new SurveyImage('bag', randomImages[0]));
//console.log('newArray');

//SurveyImage.prototype.renderImage = function (){

var position1 = document.getElementById('image1');
//position1.textContent = 'img/bag.jpg';
var imageleft = document.createElement('img');
imageleft.setAttribute('src', randomImages[getRandomImage(0,20)]);
console.log(imageleft.setAttribute);

function placeImage(idtag){
  var choice1 = document.getElementById(idtag);
  choice1.appendChild(imageleft);
}

var position2 = document.getElementById('image2');
var imagemiddle = document.createElement('img');
imagemiddle.setAttribute('src', randomImages[getRandomImage(0,20)]);

function placeImage2(idtag){
  var choice2 = document.getElementById(idtag);
  choice2.appendChild(imagemiddle);
}

var position3 = document.getElementById('image3');
var imageRight = document.createElement('img');
imageRight.setAttribute('src', randomImages[getRandomImage(0,20)]);

function placeImage3(idtag){
  var choice3 = document.getElementById(idtag);
  choice3.appendChild(imageRight);
}
bag = new ImageData('bag', 'img/bag.jpg');
banana = new ImageData('banana', 'img/banana.jpg');
bathroom = new ImageData('bathroom', 'img/boots.jpg');
boots = new ImageData('boots', 'img/boots.jpg');
breakfast = new ImageData('breakfast', 'img/breakfast.jpg');
bubblegum = new ImageData('bubblegum', 'img/bubblegum.jpg');
chair = new ImageData('chair', 'img/chair.jpg');
cthulhu = new ImageData('cthulhu', 'img/cthulhu.jpg');
dogduck = new ImageData('dogduck', 'img/dogduck.jpg');
dragon = new ImageData('dragon', 'img/dragon.jpg');
placeImage('image1');
placeImage2('image2');
placeImage3('image3');
