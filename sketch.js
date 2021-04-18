
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0
var backgroundImage
function preload(){
  
  
monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  backgroundImage=loadImage("jungle2.jpg");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(60,500,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.2;
  ground=createSprite(300,570,600,10);
  ground.velocityX=-5;
  obstacleGroup=createGroup();
  FoodGroup=createGroup();
}


function draw() {
background(backgroundImage);
  if(ground.x<300){
    ground.x=300
  }
if(keyDown("space")){
  monkey.velocityY=-7
}
  monkey.velocityY=monkey.velocityY+1
  monkey.collide(ground);
  if (monkey.isTouching(FoodGroup)){
    survivalTime=survivalTime+3
    FoodGroup.destroyEach()
  }
  if(monkey.isTouching(obstacleGroup)){
    FoodGroup.destroyEach();
    obstacleGroup.destroyEach();
    monkey.velocityX=0;
    ground.velocityX=0;
    survivalTime=survivalTime-1;
  }
  populateBananas();
  populateObstacles();
 drawSprites();
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time: "+survivalTime,420,40)

}
function populateBananas(){
  if(frameCount%60==0){
    banana=createSprite(600,400,30,10);
    banana.addImage("bananas",bananaImage);
    banana.y= random(400,100)
    banana.scale=0.15;
    banana.velocityX=-4
    banana.lifetime=140;
    FoodGroup.add(banana);
  }
}
function populateObstacles(){
  if(frameCount%100==0){
  obstacle=createSprite(600,515,10,10);
  obstacle.addImage("rock",obstacleImage);
  obstacle.scale=0.3; 
  obstacle.velocityX=-4
  obstacle.lifetime=140;
  obstacleGroup.add(obstacle);
  }
}


