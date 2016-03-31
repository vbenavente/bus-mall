//Global Variables
var bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass;
var storeObjectsArray = [];
var totalClicks = 0;

function saveChartToStorage(){
  localStorage.setItem('chartdata', JSON.stringify(storeObjectsArray));
};
function fetchChartFromStorage(){
  var userChart = JSON.parse(localStorage.getItem('chartdata'));
  if (userChart){
    console.log('chart saved');
    storeObjectArray = userChart;
  }
}

function handleClearLsClick(){
  localStorage.clear();
}

fetchChartFromStorage();

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
  var displayButtons = document.getElementById('display-buttons');
  displayButtons.textContent = '';
  var displayImages = document.getElementById('display-images');
  //below clears the image so a new one can be input
  displayImages.textContent = '';
  var imagesDisplayArray = createThreeImages();
  displayImages.appendChild(imagesDisplayArray[0]);
  displayImages.appendChild(imagesDisplayArray[1]);
  displayImages.appendChild(imagesDisplayArray[2]);

  var clearLsButton = document.createElement('button');
  clearLsButton.addEventListener('click', handleClearLsClick);
  var clear = document.getElementById('display-buttons');
  clear.appendChild(clearLsButton);
  clearLsButton.textContent = 'Clear Local Storage';
}

function createButtons(){
  var buttonResults = document.createElement('button');
  buttonResults.addEventListener('click', chart);
  var buttonMoreClicks = document.createElement('button');
  buttonMoreClicks.addEventListener('click', collectTrackerDataFromClick);

  return [buttonResults, buttonMoreClicks];
}

//add my chart, this function runs when buttonResults is clicked
function chart(){
  var displayButtons = document.getElementById('display-buttons');
  displayButtons.textContent = '';
  var displayImages = document.getElementById('display-images');
  displayImages.textContent = '';
  // bar chart data
  var barData = {
    labels : ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'],
    datasets : [
      {
        fillColor : '#48A497',
        strokeColor : '#48A4D1',
        data : [storeObjectsArray[0].timesdisplayed,storeObjectsArray[1].timesdisplayed,storeObjectsArray[2].timesdisplayed,storeObjectsArray[3].timesdisplayed,storeObjectsArray[4].timesdisplayed,storeObjectsArray[5].timesdisplayed,storeObjectsArray[6].timesdisplayed,storeObjectsArray[7].timesdisplayed,storeObjectsArray[8].timesdisplayed,storeObjectsArray[9].timesdisplayed,storeObjectsArray[10].timesdisplayed,storeObjectsArray[11].timesdisplayed,storeObjectsArray[12].timesdisplayed,storeObjectsArray[13].timesdisplayed,storeObjectsArray[14].timesdisplayed,storeObjectsArray[15].timesdisplayed,storeObjectsArray[16].timesdisplayed,storeObjectsArray[17].timesdisplayed,storeObjectsArray[18].timesdisplayed,storeObjectsArray[19].timesdisplayed]
      },
      {
        fillColor : 'gba(73,188,170,0.4)',
        strokeColor : 'gba(72,174,209,0.4)',
        data : [storeObjectsArray[0].timesClicked,storeObjectsArray[1].timesClicked,storeObjectsArray[2].timesClicked,storeObjectsArray[3].timesClicked,storeObjectsArray[4].timesClicked,storeObjectsArray[5].timesClicked,storeObjectsArray[6].timesClicked,storeObjectsArray[7].timesClicked,storeObjectsArray[8].timesClicked,storeObjectsArray[9].timesClicked,storeObjectsArray[10].timesClicked,storeObjectsArray[11].timesClicked,storeObjectsArray[12].timesClicked,storeObjectsArray[13].timesClicked,storeObjectsArray[14].timesClicked,storeObjectsArray[15].timesClicked,storeObjectsArray[16].timesClicked,storeObjectsArray[17].timesClicked,storeObjectsArray[18].timesClicked,storeObjectsArray[19].timesClicked]
      },
      {
        fillColor : 'gba(73,188,170,0.4)',
        strokeColor : 'gba(72,174,209,0.4)',
        data : [(storeObjectsArray[0].timesClicked / storeObjectsArray[0].timesdisplayed),(storeObjectsArray[1].timesClicked / storeObjectsArray[1].timesdisplayed),(storeObjectsArray[2].timesClicked / storeObjectsArray[2].timesdisplayed),(storeObjectsArray[3].timesClicked / storeObjectsArray[3].timesdisplayed),(storeObjectsArray[4].timesClicked / storeObjectsArray[4].timesdisplayed),(storeObjectsArray[5].timesClicked / storeObjectsArray[5].timesdisplayed),(storeObjectsArray[6].timesClicked / storeObjectsArray[6].timesdisplayed),(storeObjectsArray[7].timesClicked / storeObjectsArray[7].timesdisplayed),(storeObjectsArray[8].timesClicked / storeObjectsArray[8].timesdisplayed),(storeObjectsArray[9].timesClicked / storeObjectsArray[9].timesdisplayed),(storeObjectsArray[10].timesClicked / storeObjectsArray[10].timesdisplayed),(storeObjectsArray[11].timesClicked / storeObjectsArray[11].timesdisplayed),(storeObjectsArray[12].timesClicked / storeObjectsArray[12].timesdisplayed),(storeObjectsArray[13].timesClicked / storeObjectsArray[13].timesdisplayed),(storeObjectsArray[14].timesClicked / storeObjectsArray[14].timesdisplayed),(storeObjectsArray[15].timesClicked / storeObjectsArray[15].timesdisplayed),(storeObjectsArray[16].timesClicked / storeObjectsArray[16].timesdisplayed),(storeObjectsArray[17].timesClicked / storeObjectsArray[17].timesdisplayed),(storeObjectsArray[18].timesClicked / storeObjectsArray[18].timesdisplayed),(storeObjectsArray[19].timesClicked / storeObjectsArray[19].timesdisplayed)]
      }
    ]
  };
            // get bar chart canvas
  var images = document.getElementById('chart').getContext('2d');
            // draw bar chart
  new Chart(images).Bar(barData);

  console.log('chart works!');
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
  saveChartToStorage();
  placeImage();
  totalClicks++;
  console.log('event.target: ', event.target);
  console.table(storeObjectsArray);
  for(var i = 0; i < storeObjectsArray.length; i++){
    if(storeObjectsArray[i].name === event.target.id){
      storeObjectsArray[i].timesClicked++;
    }
  }
  if (totalClicks < 25) {
    placeImage();
  } else if (totalClicks === 25) {
    var displayImages = document.getElementById('display-images');
    displayImages.textContent = '';
    placeButtons();
  } else if (totalClicks === 35){
    chart();
  }
}
