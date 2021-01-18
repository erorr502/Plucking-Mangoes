
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,ground,stone,tree,m1,m2,m3,m4,m5,m6,m7,chain;

function preload()
{
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
	backgroundImg = loadImage("bg.png");
}

function setup() {
	createCanvas(1280, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(320,225);
	chain = new SlingShot(stone.body,{x:320 , y:225});
	m1 = new mango(900,150,8);
	m2 = new mango(950,120,10);
	m3 = new mango(1000,100,7);
	m4 = new mango(950,60,9);
	m5 = new mango(1050,60,6);
	m6 = new mango(1100,120,10);
	ground = Bodies.rectangle(640,385,1290,20,{isStatic:true});
	World.add(world,ground);
	
	Engine.run(engine);
	  
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}


function draw() {
	if (keyIsPressed === true) {
		chain.attach();
	  }
    
    rectMode(CENTER);
    background(backgroundImg);
    push();
    rect(width/2,400,width,20);
	chain.display();
    drawSprites();
    
    imageMode(CENTER);
    image(boy,400,300,250,300);
	image(tree,1000,180,400,400);
	stone.display();
	m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();
	collision(stone,m1);
	collision(stone,m2);
	collision(stone,m3);
	collision(stone,m4);
	collision(stone,m5);
	collision(stone,m6);

	strokeWeight(3);
	stroke(0);
	fill(255);
    text("Drag the stone to pluck mangoes & Press any key to play again", 285, 22);
	
}
function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
	}
}
