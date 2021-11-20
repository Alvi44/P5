var ground, groundImage;
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png") 

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,100,10,10);
  trex.addAnimation("running",trex_running)
  trex.scale = 0.5

  ground = createSprite(300,180,600,10)
}

function draw(){
  background(220)
 
  if (keyDown("space")){
    trex.velocityY = -12
  }

  //adding gravity to trex
  trex.velocityY = trex.velocityY + 0.8

  trex.collide(ground)

  drawSprites();
}



