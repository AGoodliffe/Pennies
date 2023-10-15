// -------------------------------------------- ** declare variables ** -----------------------------------------------------
let randomImage = [];

let numPennies = 15;
let currentPenny = 0;
let pennyX = [];
let pennyY = [];

let randomThought = [
  "My thought one",
  "My thought two",
  "My thought three",
  "My thought four"
];
let currentThought = randomThought[0];

let button;

let pinkCol;
let brownCol;

//let myFont;

function preload() {

  // ---------------------------------------- ** loading images ** ----------------------------------------------------------
  randomImage[0] = loadImage('pennies-01.png');
  randomImage[1] = loadImage('pennies-02.png');
  randomImage[2] = loadImage('pennies-03.png');
  randomImage[3] = loadImage('pennies-04.png');
  randomImage[4] = loadImage('pennies-05.png');
  randomImage[5] = loadImage('pennies-06.png');
  randomImage[6] = loadImage('pennies-07.png');
  randomImage[7] = loadImage('pennies-08.png');
  randomImage[8] = loadImage('pennies-09.png');
  randomImage[9] = loadImage('pennies-10.png');
  randomImage[10] = loadImage('pennies-11.png');
  randomImage[11] = loadImage('pennies-12.png');
  randomImage[12] = loadImage('pennies-13.png');
  randomImage[13] = loadImage('pennies-14.png');
  randomImage[14] = loadImage('pennies-15.png');
  randomImage[15] = loadImage('pennies-16.png');
  randomImage[16] = loadImage('pennies-17.png');

  //myFont = loadFont('https://use.typekit.net/fhc7aff.css');

}

function setup() {
  // ----------------------------------------** setting canavas as window size and height  **------------------------------------------
  createCanvas(windowWidth, windowHeight);
  //loadImage('/Users/alice/Desktop/Pennies/pennies-01.png', img0 => {image(img0,100,100)});
  background(242,190,210);
  frameRate(13);
  pinkCol = color(242,190,210);
  brownCol = color(81, 31, 18);

  
  button = createButton('  give me another thought  ');
  button.center('horizontal');
  button.style('text-align', 'center');
  button.style('font-size', '30px');
  button.style("font-family", "bookmania");
  button.style('background-color', pinkCol);
  button.style('font-fill', brownCol);
  button.style('border-width', 0);
  button.center();
  button.position((windowWidth/2), (windowHeight/1.25));
  button.mousePressed(onButtonPressed);
}

function drawPennies() {

  for (let n = 0; n < numPennies; ++n) {

    penny = (n + currentPenny)%numPennies;
    // ---------------------------------- ** variable to store random image from array ** -----------------------------------------------
    var idx = penny%numPennies;
    randomVariable = randomImage[idx];

    // --------------------------- ------ ** if statement to make 2p bigger than 1p ** ------------------------------------------------
    if (randomVariable != randomImage[2] && randomVariable != randomImage[0] && randomVariable != randomImage[1]) {
      image(randomVariable,pennyX[penny],pennyY[penny],70,70);
    }
    else {
      image(randomVariable,pennyX[penny],pennyY[penny],85,85);
    }
  }
}

function drawThought() {

  fill(81, 31, 18);
  textFont('bookmania');
  textSize(windowWidth/30);
  text
  //text('p5*js', 10, 50);
  textAlign(CENTER);
  text("PENNY FOR YOUR THOUGHTS", (windowWidth/2), (windowHeight/10));
  textSize(windowWidth/50);
  text(currentThought, (windowWidth/2), (windowHeight/2));
}

function draw() {
  //setTimeout(drawPennies, 2000);

  // --------------------------------------------- ** centre image to mouse ** ---------------------------------------------
  imageMode(CENTER);

  clear();
  background(242,190,210);

  pennyX[currentPenny] = mouseX;
  pennyY[currentPenny] = mouseY;

  if (++currentPenny == numPennies) currentPenny = 0;

  drawThought();
  drawPennies();

}

function onButtonPressed() {

  currentThought = random(randomThought);

}