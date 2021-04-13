const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 

  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
 
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  
  block16 = new Block(390,155,30,40);

  ball = Bodies.circle(100,100,20);
  World.add(world , ball);

  Jayesh1 = new Block(700,195,20,30);
  Jayesh2 = new Block(680,195,20,30);
  Jayesh3 = new Block(640,195,20,30);
  Jayesh4 = new Block(660,195,20,30);
  Jayesh5 = new Block(720,195,20,30);
  Jayesh6 = new Block(740,195,20,30);
  Jayesh7 = new Block(760,195,20,30);

  Jayesh8 = new Block(700,150,20,30);
  Jayesh9 = new Block(680,150,20,30);
  Jayesh10 = new Block(660,150,20,30);
  Jayesh11 = new Block(720,150,20,30);
  Jayesh12 = new Block(740,150,20,30);

  Jayesh13 = new Block(700,105,20,30);
  Jayesh14 = new Block(720,105,20,30);
  Jayesh15 = new Block(680,105,20,30);
  
  Jayesh16 = new Block(700,75,20,30);
 
  slingShot = new SlingShot(this.ball,{x:100 , y:200});
  
  

}
function draw() {
  background(56,44,44); 


  
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(2);

  slingShot.display();
  fill("skyblue");


  Jayesh1.display();
  Jayesh2.display();
  Jayesh3.display();
  Jayesh4.display();
  Jayesh5.display();
  Jayesh6.display();
  Jayesh7.display();
  fill("pink");
  Jayesh8.display();
  Jayesh9.display();
  Jayesh10.display();
  Jayesh11.display();
  Jayesh12.display();
  fill("turquoise");
  Jayesh13.display();
  Jayesh14.display();
  Jayesh15.display();
  fill("grey");
  Jayesh16.display();
  

  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  imageMode(CENTER);
  image(polygon_img , ball.position.x , ball.position.y , 40,40)


}

function mouseDragged() {
  Matter.Body.setPosition(this.ball , {x : mouseX , y : mouseY})
}
function mouseReleased() {
  slingShot.fly()
}
function keyPressed() {
  if(keyCode == 32) {
    slingShot.attach(this.ball);
  }
}