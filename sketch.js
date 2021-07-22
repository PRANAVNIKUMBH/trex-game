//Global variables
var trexani,groundimg,trex,ground 
//load animation, images and sound
function preload(){
  trexani=loadAnimation('trex1.png','trex3.png','trex4.png')
  groundimg=loadImage('ground2.png')
}

function setup() 
{
  createCanvas(600,200);
  trex=createSprite(50,170,20,35)
  trex.addAnimation('walking',trexani)
  trex.scale=0.6

  ground=createSprite(300,180,600,20)
  ground.addImage(groundimg)
}

function draw() 
{

background('lightgray');
trex.collide(ground)

if(keyDown('space')){
trex.velocityY=-5
}
trex.velocityY=trex.velocityY+0.3

ground.velocityX=-5
if(ground.x < 0){
ground.x = 600  
}
drawSprites()
}

