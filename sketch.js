var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var bird;
var balloonOB;
function preload(){
bgImg = loadImage("assets/bg.png")
ob1Img = loadImage('assets/obsBottom1.png')
ob2Img = loadImage('assets/obsBottom2.png')
ob3Img = loadImage('assets/obsBottom3.png')
obT1Img = loadImage('assets/obsTop1.png')
obT2Img = loadImage('assets/obsTop2.png')

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon1.png","assets/balloon1.png")
}

function setup(){
createCanvas(600,500);
//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3
bg.velocityX = -2;



//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
 

//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() { 
  background("black");
if (bg.x<0)   {
bg.x=bg.width/2;

}
balloon.collide(bottomGround);

TopObstacle()

          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY= -9 ;
        
          }


          //adding gravity
          balloon.velocityY = balloon.velocityY+2;
   
        drawSprites();
  
}
function TopObstacle() {
if (frameCount%50 == 0) {
  bird = createSprite(600,0,20,20);
  bird.velocityX = -8;
}

}

function BottomObstacle() {
  
}
  
