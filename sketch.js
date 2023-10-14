// -------------------------------------------- ** declare variables ** -----------------------------------------------------
let img0;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;
let img15;
//let img16;
let randomImage = [];
let randomVar;

let numPennies = 15;
let currentPenny = 0;
let pennyX = [-1];
let pennyY = [-1];

let randomThought = [
  "My thought one",
  "My thought two",
  "My thought three",
  "My thought four"
];
let currentThought = randomThought[0];

let button;

function preload() {

  // ---------------------------------------- ** loading images ** ----------------------------------------------------------
  img0 = loadImage('pennies-01.png');
  img1 = loadImage('pennies-02.png');
  img2 = loadImage('pennies-03.png');
  img3 = loadImage('pennies-04.png');
  img4 = loadImage('pennies-05.png');
  img5 = loadImage('pennies-06.png');
  img6 = loadImage('pennies-07.png');
  img7 = loadImage('pennies-08.png');
  img8 = loadImage('pennies-09.png');
  img9 = loadImage('pennies-10.png');
  img10 = loadImage('pennies-11.png');
  img11 = loadImage('pennies-12.png');
  img12 = loadImage('pennies-13.png');
  img13 = loadImage('pennies-14.png');
  img14 = loadImage('pennies-15.png');
  img15 = loadImage('pennies-16.png');
  //img16 = loadImage('pennies-17.png');

  //---------------------------------------------** set array of images ** ---------------------------------------------------

  randomImage[0] = img0;
  randomImage[1] = img1;
  randomImage[2] = img2;
  randomImage[3] = img3;
  randomImage[4] = img4;
  randomImage[5] = img5;
  randomImage[6] = img6;
  randomImage[7] = img7;
  randomImage[8] = img8;
  randomImage[9] = img9;
  randomImage[10] = img10;
  randomImage[11] = img11;
  randomImage[12] = img12;
  randomImage[13] = img13;
  randomImage[14] = img14;
  randomImage[15] = img15;
  //randomImage[16] = img16;

}

function setup() {
  // ----------------------------------------** setting canavas as window size and height  **------------------------------------------
  createCanvas(windowWidth, windowHeight);
  //loadImage('/Users/alice/Desktop/Pennies/pennies-01.png', img0 => {image(img0,100,100)});
  background(242,190,210);
  frameRate(7)

  button = createButton('click me');
  button.position(0, 0);
  button.mousePressed(onButtonPressed);
}

function drawPennies() {

  for (let n = 0; n < numPennies; ++n) {
    // ---------------------------------- ** variable to store random image from array ** -----------------------------------------------
    var idx = n%numPennies;
    randomVariable = randomImage[idx];
    // random(randomImage);

    // --------------------------- ------ ** if statement to make 2p bigger than 1p ** ------------------------------------------------
    if (randomVariable != randomImage[2] && randomVariable != randomImage[0] && randomVariable != randomImage[1]) {
      image(randomVariable,pennyX[n],pennyY[n],70,70);
    }
    else {
      image(randomVariable,pennyX[n],pennyY[n],85,85);
      //image(randomImage[randomVar],mouseX,mouseY,80,80);

    }
  }
}

function drawThought() {
  textSize(20);
  text("Penny for your thoughts?", 50, 50);
  text(currentThought, 50, 100);
  // if (++currentThought == randomThought.length) currentThought = 0;
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