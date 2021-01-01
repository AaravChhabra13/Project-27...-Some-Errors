
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var roof,bob1,chain1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 roof = new Roof(400,100,500,20);

	 bob1= new Bob(260,500,70);

	 bob2=new Bob(330,500,70);

	 bob3=new Bob(400,500,70);

	 bob4=new Bob(470,500,70);

	 bob5=new Bob(540,500,70);
	 
	 rope1= new Rope(bob1.body,roof.body,260,0);
	 rope2= new Rope(bob2.body,roof.body,340,0);
	 rope3= new Rope(bob3.body,roof.body,410,0);
	 rope4= new Rope(bob4.body,roof.body,470,0);
	 rope5= new Rope(bob5.body,roof.body,540,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  roof.display();
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
  
  drawSprites();
 
}

function keyPressed(){
	if(keycode=== UP_Arrow){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:100});
	}
}



