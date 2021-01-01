
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
//creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  console.log(ground.x);
  
   invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
  
}


function draw() {
background("white");
  
  
 
  
  if(keyDown("space")&& monkey.y>=100){
    monkey.velocityY=-12;

  }
    
   
  
 



(monkey.velocityY=monkey.velocityY+0.5);
   if(ground.x<0){
      ground.x=ground.width/2;
    }
monkey.collide(invisibleGround);

drawSprites();

}