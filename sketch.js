
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score
var ground
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

  createCanvas(400,365);
  
  monkey=createSprite(100,300,50,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(200,360,800,4);
  
  FoodGroup=new Group()
  obstaclesGroup=new Group();

}
  
function draw() {

background("lightBlue");

   ground.velocityX=-1

    if (ground.x < 0){

      ground.x = ground.width/2;
 }

  stroke("white");
  textSize=20;
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survival Time:"+ survivalTime,100,50);
  
  
  

 if (keyDown("space") && monkey.y>326){
   monkey.velocityY=-13
 }
  monkey.velocityY = monkey.velocityY + 0.3
  monkey.collide(ground);
  spawnFood();
  spawnObstacles();
  console.log(monkey.y)

  drawSprites();
  
  



}


function spawnFood(){
  if (frameCount % 80 === 0) {
    food=createSprite(400,200,40,40);  
    food.y = Math.round(random(60,120));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -4;
    food.scale=0.1;
    lifetime=50;
    FoodGroup.add(food);
  }  
}

function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(600,350,10,40);
   obstacle.addImage(obstacleImage)
   obstacle.velocityX = -6 
    
     //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 200;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}



