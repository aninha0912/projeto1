let cor;
let posicaohorizontal; // x
let posicaoVertical; // y
let posicaoHorizontal2; // x
let posicaoVertical2; // y
let circuloX //horizontal
let circuloY //vertical






function setup() {
  createCanvas(400, 400);
   background("pink");
  cor = color(random(0,255), random(0,255), random(0,255));
  posicaoHorizontal = 0;
posicaoVertical = 200;
  cor = color(random(255), random(255), random(255));
posicaoHorizontal = 0;
posicaoVertical = random(height);

posicaoHorizontal2 = 0;
posicaoVertical2 = random(height);
  cor = color(random(255), random(255),
random(255));
circuloX = [0, 0];
circuloY = [random(height), random(height)];
}


function draw() {
 
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical, 50);
  circle(posicaoHorizontal2, posicaoVertical2, 50);
posicaoHorizontal+= random(0, 3);
posicaoVertical+= random(-3, 3);
posicaoHorizontal2+= random(0, 3);
posicaoVertical2+= random(-3, 3);
  
cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  posicaoHorizontal++;
 posicaoHorizontal+= random(0, 3);
posicaoVertical+= random(-3, 3);   
  
  
 
  if (mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
  }
   
}
