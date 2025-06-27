let plantHeight = 0;
let growing = true;
let cowX = 100; 
let chickenY = 200; 
let chickenX = 200; 
let chickenJumping = false; 
let sunX = 700; 
let tractorX = 0; 

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(135, 206, 250); // céu azul

  // Desenhando o sol
  fill(255, 204, 0);
  ellipse(sunX, 100, 80, 80);
  sunX -= 0.5; 
  if (sunX < 0) sunX = width; 

  // Desenhando o solo
  fill(139, 69, 19); 
  rect(0, height - 50, width, 50);

  // Adicionando a Manuela
  drawManuela(600, height - 110);

  // Adicionando a Paola
  drawPaola(650, height - 110);

  // Plantação, vaca, galinha, planta, trator (como no código original)
  drawCrops();
  drawCow();
  drawChicken();
  drawPlant();
  drawTractor();
}

function drawManuela(x, y) {
  // Cabeça
  fill('peachpuff'); 
  ellipse(x, y, 30, 30);

  // Óculos
  noFill();
  stroke(0);
  strokeWeight(2);
  ellipse(x - 10, y - 5, 15, 10); 
  ellipse(x + 10, y - 5, 15, 10); 
  line(x - 5, y - 5, x + 5, y - 5); 

  // Corpo
  noStroke();
  fill('purple');
  rect(x - 10, y + 10, 20, 40);

  // Olhos
  fill(0);
  ellipse(x - 10, y - 5, 3, 3);
  ellipse(x + 10, y - 5, 3, 3);

  // Boca
  fill('red');
  ellipse(x, y + 5, 10, 5);

  // Símbolo do signo de Câncer
  textSize(14);
  fill(255);
  text('♋', x - 20, y - 15);
}

function drawPaola(x, y) {
  // Cabeça
  fill('peachpuff'); 
  ellipse(x, y, 30, 30);

  // Cabelo
  fill('brown');
  ellipse(x - 15, y, 20, 30);
  ellipse(x + 15, y, 20, 30);
  ellipse(x, y + 10, 30, 20);

  // Corpo
  noStroke();
  fill('blue');
  rect(x - 10, y + 10, 20, 40);

  // Olhos
  fill(0);
  ellipse(x - 5, y - 5, 3, 3);
  ellipse(x + 5, y - 5, 3, 3);

  // Boca
  fill('red');
  ellipse(x, y + 5, 10, 5);
}

function drawCrops() {
  // Adicionando uma plantação de tomates
  for (let i = 300; i < 400; i += 40) {
    fill(34, 139, 34); 
    rect(i, height - 70, 10, 20);
    fill(255, 0, 0); 
    ellipse(i + 5, height - 80, 15, 15);
  }
}

function drawCow() {
  fill(255); 
  rect(cowX, height - 150, 60, 40);
  fill(0); 
  ellipse(cowX + 20, height - 130, 20, 20);
  ellipse(cowX + 40, height - 130, 20, 20);
  ellipse(cowX + 10, height - 140, 20, 20);

  cowX += random(-1, 1);
  if (cowX < 0) cowX = 0;
  if (cowX > width - 60) cowX = width - 60;
}

function drawChicken() {
  fill(255, 0, 0);
  ellipse(chickenX, height - 150 + chickenY, 30, 30);
  fill(255);
  ellipse(chickenX, height - 165 + chickenY, 20, 20);
  fill(0);
  ellipse(chickenX - 5, height - 165 + chickenY, 5, 5);
  ellipse(chickenX + 5, height - 165 + chickenY, 5, 5);
  fill(255, 165, 0);
  triangle(chickenX + 1, height - 160 + chickenY, chickenX + 10, height - 160 + chickenY, chickenX + 5, height - 155 + chickenY);

  if (!chickenJumping) {
    chickenJumping = true;
  } else {
    chickenY -= 5; 
    if (chickenY <= -30) { 
      chickenJumping = false; 
    }
  }
  if (chickenY < 0) {
    chickenY += 5; 
  }
  if (frameCount % 60 === 0) {
    chickenX += random(-10, 10);
  }
}

function drawPlant() {
  fill(34, 139, 34);
  rect(width / 2 + 200, height - 50 - plantHeight, 20, plantHeight);
  if (growing) {
    plantHeight += 1; 
    if (plantHeight >= 100) {
      growing = false;
    }
  } else {
    plantHeight -= 0.5;
    if (plantHeight <= 0) {
      growing = true;
    }
  }
}

function drawTractor() {
  fill('green');
  rect(tractorX, height - 70, 60, 30);
  fill('black');
  ellipse(tractorX + 10, height - 40, 15, 15);
  ellipse(tractorX + 50, height - 40, 15, 15);
  tractorX += 1;
  if (tractorX > width) tractorX = -60;
}
