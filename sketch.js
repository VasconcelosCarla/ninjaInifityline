//declaração de variáveis globais
var ninja, ninjaIdle, ninjaRun, ninjaJump;
var ground, groundImage;
var backgroundImg;

function preload(){

  backgroundImg = loadImage("../assets/fundo.jpg")

  ninjaIdle = loadAnimation("../assets/Idle0.png", "../assets/Idle1.png", "../assets/Idle2.png", "../assets/Idle3.png", "../assets/Idle4.png", "../assets/Idle5.png", "../assets/Idle6.png", "../assets/Idle7.png", "../assets/Idle8.png", "../assets/Idle9.png");

  ninjaRun = loadAnimation("../assets/Run__000.png", "../assets/Run__001.png","../assets/Run__002.png", "../assets/Run__003.png","../assets/Run__004.png",
"../assets/Run__005.png", "../assets/Run__006.png", "../assets/Run__007.png", "../assets/Run__008.png", 
"../assets/Run__009.png");

 ninjaJump = loadAnimation("../assets/Jump__000.png", "../assets/Jump__001.png", "../assets/Jump__002.png", "../assets/Jump__003.png", "../assets/Jump__004.png", "../assets/Jump__005.png", "../assets/Jump__006.png", "../assets/Jump__007.png", "../assets/Jump__008.png", "../assets/Jump__009.png")

}

function setup() {
  createCanvas(1400, 700);
  ninja = createSprite(100,460, 20, 50);
  ninja.addAnimation("idle",ninjaIdle);
  ninja.addAnimation("running", ninjaRun);
  ninja.addAnimation("jumping", ninjaJump);
  ninja.scale = 0.25;

  ground = createSprite(300,530, 600, 20);
  ground.velocityX = -3;
}

function draw() {
  background(backgroundImg);

  if(keyDown("space")){
    ninja.velocityY = -10;
    ninja.changeAnimation("jumping");  
  }
  //implementando a gravidade
    ninja.velocityY = ninja.velocityY + 0.8;
  
  drawSprites();
}




