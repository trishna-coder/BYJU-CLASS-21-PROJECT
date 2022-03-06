
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground, pin1, pin2
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  paper = new Ball(200,200,30)
  ground = new Ground(400, 650, 800, 20)
  bin1 = new Ground(700,600,20,100)
  bin2 = new Ground(600,600,20,100)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 paper.display()
 ground.show()
 bin1.show()
 bin2.show()
}

function keyPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,{x:0,y:0},{x:0.05,y:-0.05})

	}
	
}

