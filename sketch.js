//cria as variaveis

var chaoInvisivel
var trex;
var trexAnim;
var chao;
var chaoImg;
var nuvenImg;
var obstaculo1, obstaculo2, obstaculo3, obstaculo4, obstaculo5, obstaculo6
var ENCERRAR = 0;
var JOGAR = 1;
var estadoJogo = JOGAR;
var grupodeobstaculos;
var grupodenuvens;



//carrega as inmagens

function preload(){
  trexAnim = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  chaoImg = loadImage("ground2.png");
  nuvenImg = loadImage("nuvenspixels.png")
  
  obstaculo1 = loadImage("obstacle1.png");
  obstaculo2 = loadImage("obstacle2.png");
  obstaculo3= loadImage("obstacle3.png");
  obstaculo4 = loadImage("obstacle4.png");
  obstaculo5 = loadImage("obstacle5.png");
  obstaculo6 = loadImage("obstacle6.png");

}
 
//cria as funções

function setup(){
   createCanvas(600,300)
  
   //create a trex sprite
   trex = createSprite (60, 160, 20, 20);
   trex.addAnimation("trexrunning",trexAnim);
   trex.scale = 0.7;

   chaoInvisivel = createSprite(300, 295, 600, 10);
   chaoInvisivel.visible = false

   grupodeobstaculos = createGroup();
   grupodenuvens = createGroup();

   chao = createSprite (300, 280, 600, 20);
   chao.addImage(chaoImg);
}

//função que cria os desenhos 
function draw(){
   background("white");
   console.log(frameCount)
  
    

   //faz o chão ficar infinito e n acabar
   if(chao.x<0){
    chao.x = chao.width/2;
   }



    
    
 
//quando apertar espaço faz o trex pular e cria a velocidade do pulo em que ele vai ficar no ar
if(keyDown("space") && trex.y > 256) {

}
trex.collide(chaoInvisivel);


   console.log(trex.y); 
                                      
                                      
   gerarNuvens();
   gerarObstaculos();
   drawSprites();

   console.log(frameCount);


   if(estadoJogo === JOGAR){
    chao.velocityX = -2

    if(keyDown("space") && trex.y > 256) {
    trex.velocityY = -10;

    if(grupodeobstaculos.isTouching(trex)){
    estadodoJogo = ENCERRAR

    }


    }

    trex.velocityY = trex.velocityY + 0.8;

    if(chao.x<0){
      chao.x = chao.width/2;
     }
  


   }

   else if (estadoJogo == "encerrar"){

   trex.velocityY


   }



}

//cria as nuvens e a posição delas no geral
function gerarNuvens(){
  //faz as nuvens aparecerem a cada 60 blocos 
  if(frameCount %60 == 0){
    var nuvens = createSprite(500, 40, 20, 20);
    nuvens.velocityX = -5;
    nuvens.addImage(nuvenImg)
    nuvens.scale = 0.3;
    nuvens.y = Math.round(random(5, 50));
    nuvens.depth = trex.depth;
    trex.depth = trex.depth+1
    gerarNuvens.lifetime = 300;
    grupodenuvens.add(nuvens);
  }
//console.log(nuvens.X)
}


function gerarObstaculos(){
 if(frameCount %80 == 0){
  var obstaculos= createSprite(650, 260, 30, 30);
  obstaculos.velocityX = -2;

  var randObstacle = Math.round(random(1, 6));
  switch(randObstacle){

  case 1: obstaculos.addImage(obstaculo1);
  break;
  case 2: obstaculos.addImage(obstaculo2);
  break;
  case 3: obstaculos.addImage(obstaculo3);
  break;
  case 4: obstaculos.addImage(obstaculo4);
  break;
  case 5: obstaculos.addImage(obstaculo5);
  break;
  case 6: obstaculos.addImage(obstaculo6);
  default: break;

  }
  obstaculos.scale = 0.5;
  obstaculos.lifetime = 300;

  grupodeobstaculos.add(obstaculos);


 }
 console.log(gerarObstaculos)
}











