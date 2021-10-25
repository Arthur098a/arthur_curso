var chaoInvisivel
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
 trex = createSprite (60, 160, 20, 20);
 trex.addAnimation("trexrunning",trexAnim);
 trex.scale = 0.7;

chaoInvisivel = createSprite(300, 195, 600, 10);
chaoInvisivel.visible = false

 chao = createSprite (300, 180, 600, 20);
 chao.addImage(chaoImg);
}

function draw(){
  background("white");
  
   chao.velocityX = -2
    

   
   if(chao.x<0){
    chao.x = chao.width/2;
   }



    trex.velocityY = trex.velocityY + 0.8;
    
 

if(keyDown("space") && trex.y > 156) {
trex.velocityY = -10;
}
trex.collide(chaoInvisivel);
   console.log(trex.y);                                    

   drawSprites();
}

