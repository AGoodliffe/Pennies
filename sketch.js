// -------------------------------------------- ** declare variables ** -----------------------------------------------------
let randomImage = [];

let numPennies = 15;
let currentPenny = 0;
let pennyX = [];
let pennyY = [];

// ---------------------------------------- ** array to store thoughts ** -------------------------------------------------
let randomThought = [
  "I\’m really hyper aware that my shoes smell really bad at the moment",
  "can people see my get changed from my window",
  "I've been attempting to work out what is god to me, and then deciding that I am pantheist",
  "What's for dinner?",
  "Will it get easier?",
  "What needs doing?",
  "The formalisation of Game Theory has been instrumental in our capability to delude ourselves for the sake of progress.",
  "I cant decide if I like that it\’s autumn because the leaves are pretty and music sounds better or if I hate that it’s autumn because it gets dark early and my laundry doesn’t dry quickly",
  "Am I at risk of the French bed bug epidemic?",
  "Am I doing the right thing and how am I supposed to know",
  "I really really hate our government. They all seem so incapable, and yet so cruel.",
  "is my favourite colour actually blue or did I just decide that when I was younger and never thought about it since",
  "fuck rishi sunak",
  "Why can I never be bothered to leave the house anymore",
  "Am I a good person",
  "Does my boyfriend actually like me",
  "Why is everyone around me so stupid",
  "Time",
  "If ppl didn’t see it did it really happen?",
  "Do I have fleas",
  "What was named first the orange fruit or colour",
  "My football team is rubbish",
  "Imagine if apps that sell clothes could let you virtually try them on from your camera in real time with every clothing item, even like e-Bay u know, life would be so good",
  "should i bet against the team i support every game so that even if i lose, i win?",
  "How my girlfriend doesn’t think about the Roman Empire as much as I do.",
  "I only smoke abroad",
  "My year abroad was a holiday",
  "I need to buy some flowers",
  "Talk, talk, talk",
  "If could change the world what would I do first?",
  "Kindness is always proritable",
  "I’m going to fail uni",
  "Being bored in a lecture is the most boring type of boring",
  "Peepee poopoo",
  "Take a day off :) or maybe a few",
  "What is going through men’s heads?",
  "I really want ice cream",
  "We need more hand wash",
  "Frogs",
  "I really want some crisps from the bar",
  "Cricket",
  "I’ve broken the seal ffs",
  "Cereal genuinely should be put in the bowl before milk, it shouldn’t even be a debate",
  "Nostalgia is as sad as it is happy, very bittersweet",
  "There's no difference between existence and nonexistence.",
  "We're all just the universe experiencing itself. Maybe one day we'll realise that we never actually existed in the first place, and it makes no sense to ask why there's something rather than nothing.",
  "Cupcakes are temporary but death is forever.",
  "Do I have to get out of bed?",
  "Not looking forward to today",
  "Why does 3 pints make me hungover?"

];
let currentThought = randomThought[0];

let button;

let pinkCol;
let brownCol;
let bodyTextSize;

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


}

function setup() {
  // ----------------------------------------** setting canavas as window size and height  **------------------------------------------
  createCanvas(windowWidth, windowHeight);
  //loadImage('/Users/alice/Desktop/Pennies/pennies-01.png', img0 => {image(img0,100,100)});
  background(242,190,210);
  frameRate(10);
  pinkCol = color(242,190,210,0);
  brownCol = color(81, 31, 18);
  bodyTextSize = (windowWidth/30);

  
  button = createButton('  GIVE ME ANOTHER THOUGHT  ');
  //button.center('horizontal');
  button.style('text-align', 'center');
  button.style('font-size', '30px');
  button.style("font-family", "bookmania");
  button.style('background-color', pinkCol);
  button.style('font-fill', brownCol);
  button.style('border-width', 0);
  //button.position();
  //button.position((windowWidth/2), (windowHeight/1.25));
  button.position((windowWidth/2)-(button.width), (windowHeight/1.2));
  button.mousePressed(onButtonPressed);
  //button.setAutoDraw(false);
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
  textStyle('normal');
  textSize(windowWidth/30);
  text
  //text('p5*js', 10, 50);
  textAlign(CENTER,CENTER);
  text("PENNY FOR YOUR THOUGHTS", (windowWidth/2), (windowHeight/10));
  
  
  // ----------------------------------------- ** draw current though to screen ** ----------------------------------------
  //text(currentThought, (windowWidth/2), (windowHeight/2));
  textFont('bookmania', 'serif', 'italic');
  textStyle('italic');
  textSize(windowWidth/50);
  textWrap(WORD);
  //text.center('horizontal');
  text(currentThought, ((windowWidth/2)-350), (windowHeight/2)-250, 700, 500);
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