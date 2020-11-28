
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree1,ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1=new Tree(500,500,10,10);
ground1=new Ground(10,550,100,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
tree1.display();


  drawSprites();
 
}



