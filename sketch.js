const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;
var ground;
var engine, world;
var c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15;
function setup() {
  createCanvas(1200,500);
  createSprite(400, 200, 50, 50);
  engine = Engine.create(); 
  world = engine.world; 
  Engine.run(engine);
  ground=new Ground();
  // level 1
  c1=new Can(100,20,400,20);
  c2=new Can(150,20,400,20);
  c3=new Can(200,20,400,20);
  c4=new Can(250,20,400,20);
  c5=new Can(300,20,400,20);
  c6=new Can(350,10,400,20);
  c7=new Can(400,10,400,20);
  c8=new Can(450,10,400,20);
  c9=new Can(500,10,400,20);
  c10=new Can(550,5,400,20);
  c11=new Can(600,5,400,20);
  c12=new Can(650,5,400,20);
  c13=new Can(700,5,400,20);
  c14=new Can(750,3,400,20);
  c15=new Can(800,3,400,20);
  // c2=new Can(150,20,400,20);
  //c2=new Can(150,20,400,20);
  //c2=new Can(150,20,400,20);
}

function draw() {
  background("yellow");
  ground.display();
  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  c6.display();
  c7.display();
  c8.display();
  c9.display();
  c10.display();
  c11.display();
  c12.display();
  c13.display();
  c14.display();
  c15.display();
  drawSprites();
}

