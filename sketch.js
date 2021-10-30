
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roofObject = new Roof(400,100,300,20,"skyblue");
	
	//Create the Bodies Here.
    startPosition = 600;
	bobObject1 = new Bob(startPosition,300,50);
	bobObject2 = new Bob(startPosition+50,300,50);
	bobObject3 = new Bob(startPosition+100,300,50);
	bobObject4 = new Bob(startPosition+150,300,50);
	bobObject5 = new Bob(startPosition+200,300,50);
	bobDiameter = 20;
	rope1 = new Rope(bobObject1.body, roofObject.body, bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
  roofObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
}



