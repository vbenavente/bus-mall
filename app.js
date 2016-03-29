var randomImages = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.jpg', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var storeObjectsArray = [];

function SurveyImage(name, src){
  this.name = name;
  this.src = src;
  this.timesdisplayed = 0;
  this.timesClicked = 0;
}

storeObjectsArray.push(new SurveyImage('bag', randomImages[0]));
console.log('newArray');

//SurveyImage.prototype.renderImage = function (){

var position1 = document.getElementById('image1');
//position1.textContent = 'img/bag.jpg';
var imageleft = document.createElement('img');
imageleft.setAttribute('src', randomImages[0]);

function placeImage(idtag){
  var choice1 = document.getElementById(idtag);
  choice1.appendChild(imageleft);
}
placeImage('image1');

var position2 = document.getElementById('image2');
var imagemiddle = document.createElement('img');
imagemiddle.setAttribute('src', randomImages[1]);

function placeImage2(idtag){
  var choice2 = document.getElementById(idtag);
  choice2.appendChild(imagemiddle);
}
placeImage2('image2');

var position3 = document.getElementById('image3');
var imageRight = document.createElement('img');
imageRight.setAttribute('src', randomImages[2]);

function placeImage3(idtag){
  var choice3 = document.getElementById(idtag);
  choice3.appendChild(imageRight);
}
placeImage3('image3');
