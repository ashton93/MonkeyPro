var survivalTime = 0
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
 banana = createSprite(250, 50, 10, 10);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -5;
  
  
  obstacle = createSprite(350, 340, 10, 10);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -5;
  
  
  
  monkey = createSprite(100, 360, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(160, 367, 1350, 20);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);

  
    score= 0;
}
function draw() {
createCanvas(660, 480);
  background("lightgreen");
  
  if(monkey.isTouching(obstacle)){
    monkey.velocityX = 0;
  }
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(banana.isTouching(monkey)){
    score = score + 2;
  }
  

  if(keyDown("space")){
    monkey.velocityY = -12;
   
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
 monkey.collide(ground);
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :" + score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime, 100, 50);
  
  drawSprites();

  

}


function spawnbstacles(){
  var obstacle = createSprite(350, 340, 10, 10);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -5;
  
  if (frameCount % 80 === 0) {
    
    obstacle = createSprite(350, 340, 10, 10);
  }
 obstacleGroup = createGroup();
}




