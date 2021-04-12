
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var board;

function preload() {
	

function setup() {
	createCanvas(600,500);
	
	engine = Engine.create();
	world = engine.world;

	var a = 375;
	var b = 50;
	roof = new Roof(a-75,b+20,a-75,b-20);
	bob1 = new bob(a-175,a,b);
	bob2 = new bob(a-125,a,b);
	bob3 = new bob(a-75,a,b);
	bob4 = new bob(a-25,a,b);
	bob5 = new bob(a+25,a,b);

	rope2 = new rope(bob2.body,roof.body,-50*1, 0)
	rope1 = new rope(bob1.body,roof.body,-50*2, 0)
	rope3 = new rope(bob3.body,roof.body,-0, 0)
	rope4 = new rope(bob4.body,roof.body,50*1, 0)
	rope5 = new rope(bob5.body,roof.body,50*2, 0)

	board = createSprite(25,70,330,150);
	board.shapeColor = "white"

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(011);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  
  drawSprites(); 
  stroke("black");
  strokeWeight(2); 
  fill("yellow");

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-195});
  }

  
}
}
