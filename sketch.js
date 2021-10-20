
var trex;
var trexAnim;
var chao;
var chaoImg;
function preload(){
  trexAnim = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  chaoImg = loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite (50, 160, 20, 20);
 trex.addAnimation("trexrunning",trexAnim);
 trex.scale = 0.7;

 chao = createSprite (300, 190, 600, 20);
 chao.addImage(chaoImg);
}

function draw(){
  background("white");
  
   chao.velocityX = -2
   if(keyDown("space")){
    trex.velocityX = -10
   }
    trex.velocityY = 0,8;
    trex.collide(chao);


  drawSprites();
}
