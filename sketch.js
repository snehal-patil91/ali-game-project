var bullet,edges;
function preload()
{
  backgroundImg = loadImage("sprites/Background.png")
  trevorStand = loadAnimation("sprites/shooting2.png")
  trevorGeneral = loadAnimation("sprites/playerRun1.png","sprites/playerRun2.png","sprites/playerRun3.png","sprites/playerRun4.png","sprites/playerRun5.png","sprites/playerRun6.png");
}




function setup() {
  createCanvas(1500,700);

 trevor = createSprite(300, 500, 50, 50);
 trevor.addAnimation("trevorStand",trevorStand);
 trevor.addAnimation("trevor",trevorGeneral);

 bullet = createSprite(370, 460, 25, 25);
 bullet.visible= false;
   trevor.scale = 0.4;

 zombiesGroup = new Group()
 edges= createEdgeSprites();
 


}

function draw() {
  background(backgroundImg);  

  if(keyDown("space"))
  {
    bullet = createSprite(370, 460, 25, 25);
  bullet.velocityX = 3;
  bullet.x=trevor.x+100;
  bullet.y=trevor.y-40;
  }
  if(bullet.isTouching(zombiesGroup))
  {
    zombiesGroup.destroyEach();
  }
  
  if(keyWentDown(LEFT_ARROW))
  {
    trevor.velocityX= -2;
    trevor.changeAnimation("trevor",trevorGeneral);
    trevor.scale = 0.3;
  }
  if(keyWentUp(LEFT_ARROW))
  {
    trevor.velocityX= 0;
    trevor.changeAnimation("trevorStand",trevorStand);
    trevor.scale = 0.3;
  }
  if(keyWentDown(RIGHT_ARROW))
  {
    trevor.velocityX= 2;
    trevor.changeAnimation("trevor",trevorGeneral);
    trevor.scale = 0.3;
  }
  if(keyWentUp(RIGHT_ARROW))
  {
    trevor.velocityX= 0;
    trevor.changeAnimation("trevorStand",trevorStand);
    trevor.scale = 0.3
  }
  if(keyWentDown(UP_ARROW))
  {
    trevor.velocityY= -12;
    trevor.changeAnimation("trevor",trevorGeneral);
    trevor.scale = 0.3;
  }
  if(keyWentUp(UP_ARROW))
  {
    trevor.velocityY= 0;
    trevor.changeAnimation("trevorStand",trevorStand);
    trevor.scale = 0.3
  }
  spawnZombies();
  trevor.velocityY = trevor.velocityY + 0.5;
  trevor.collide(edges[3]);

  
  
  drawSprites();
}



function spawnZombies()
{
  
  if(frameCount%100===0)
  {
    var randomX = Math.round(random(100, 1200))
    var randomY = Math.round(random(100, 1300))
   Zombies1 = createSprite(1500,randomY,65,65);
   Zombies1.velocityX = -1;
   zombiesGroup.add(Zombies1);
  }
}
