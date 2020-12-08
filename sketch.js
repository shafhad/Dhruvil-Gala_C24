
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,ground,paper;
var world

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;


	box1=new Box(600,650,150,20);
	box2 = new Box(525,620,20,80);
	box3 = new Box(675,620,20,80);
	paper=new radius1(200,600,20);
	ground = new Box(400,670,800,20);

	
	//Create the Bodies Here.


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();

  //keypressed();

  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});
		
		console.log("up kye")
	}
}
