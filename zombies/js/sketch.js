let boatImg;
let humanImg;
let monsterImg;
function preload() {
  boatImg = loadImage("http://127.0.0.1:5500/zombies/images/ship.png");
  humanImg = loadImage("http://127.0.0.1:5500/zombies/images/human.png");
  monsterImg = loadImage("http://127.0.0.1:5500/zombies/images/monster.png");
}

function setup() {
  createCanvas(windowWidth * 0.9, windowHeight * 0.9);
  fill(100);

  // reset button
  resetButton = createButton("reset").position(80, 25).mousePressed(resetGame);
}

function draw() {
  background(220);

  // display the image
  image(boatImg, boatImg.width * 2, boatImg.height * 2);
  image(humanImg, humanImg.width, humanImg.height);
  image(monsterImg, monsterImg.width, monsterImg.height);
}

function resetGame() {
  // reset the game logic here
}
