var bullet1;
var bullet2;
var wall;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet1 = createSprite(50,200,40,40);
  bullet2 = createSprite(50,100,40,40);
  wall = createSprite(1500,200,40,1500);
  wall.isStatic = true;
  thickness = random(22,83);

  bullet1.velocityX = 10 ;
  bullet1.weight = 32;
  bullet1.weight= 10;

  bullet2.velocityX =10 ;
  bullet2.weight = 32;
  bullet2.damage= 20
  
}

function hasCollided(lbullet,lwall)
{ 
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
      return true

  }
  return false;
}
 

function draw() {
  background("black");
  if (hasCollided(bullet1,wall))
  {
    bullet1.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10)
    {
    
      bullet1.shapecolor=color("green");
    }

  }
  if (hasCollided(bullet2,wall))
  {
    bullet2.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10)
    {
  
      bullet2.shapecolor=color("red");
    } 

  }
  drawSprites()
  }