//variable creations
var PLAY=1
var END=0;
var gameState=1;
var monkey , monkey_running,monkeylose;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivaltime;

function preload()
{  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
  monkey=createSprite(50,365);
  monkey.addAnimation("anime",monkey_running);
  monkey.scale=0.1;

 ground=createSprite(200,395,400,10);
  ground.x=ground.width /2; 
  
  survivaltime=0;
}


function draw() {
 createCanvas(400,400);
  background("white");
  
   monkey.collide(ground);
  
  if(gameState===1){
 
  monkey.velocityY=monkey.velocityY+0.8;
 
   if(keyDown("space")){
    monkey.velocityY=-12;
  }
  
 if( monkey.isTouching(obstacleGroup)){
   gameState=0;
  
 }
  
    survivaltime=frameCount;
    
  spawnfood();
  spawnobstacle();
  }
  
  if(gameState===0){
     text("GameOver,PRESS R TO RESET",100,200);
  
    if(keyDown("R")){
      reset();
    }
  }
  survivaltime=Math.ceil(frameCount%frameRate);
  text("survivaltime="+survivaltime,200,50);
  
  drawSprites();
}


function spawnfood(){
  
  if(frameCount%80===0) {                        banana=createSprite(400,Math.round(random(120,200)),20,20);
    banana.addImage("image",bananaImage);
    banana.velocityX=-7;
    banana.scale=0.07;
    banana.lifetime=80;
    FoodGroup.add(banana);
  }
}

function spawnobstacle(){

  if(frameCount%300===0){
    obstacle=createSprite(400,370,20,20);
    obstacle.addImage("image2",obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-5;
    obstacleGroup.add(obstacle);
  }
}

function reset(){
  gameState=1;
  survivaltime=0;
}

