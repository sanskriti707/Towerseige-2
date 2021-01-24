
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var obj1;
var obj2;
//obj 1
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16;

//obj 2
var BLOCK1;
var BLOCK2;
var BLOCK3;
var BLOCK4;
var BLOCK5;
var BLOCK6;
var BLOCK7;
var BLOCK8;
var BLOCK9;
function preload(){
    polygonImg=loadImage("polygon.png");
}



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;



    ground = new Ground(600,380,1200,20);
    
    obj1= new object (300,350,300,20);
    obj2= new object (600,250,200,20);
    
    //obj 1
    //level 1
    block1=new Box   (210,275,30,40);
    block2=new Box   (240,275,30,40);
    block3=new Box   (270,275,30,40);
    block4=new Box   (300,275,30,40);
    block5=new Box   (330,275,30,40);
    block6=new Box   (360,275,30,40);
    block7=new Box   (390,275,30,40);
    //level 2
    block8=new Box   (240,235,30,40);
    block9=new Box   (270,235,30,40);
    block10=new Box  (300,235,30,40);
    block11=new Box  (330,235,30,40);
    block12=new Box  (360,235,30,40);
    //level 3
    block13=new Box   (270,195,30,40);
    block14=new Box   (300,195,30,40);
    block15=new Box   (330,195,30,40);
    //level 4
    block16=new Box   (300,155,30,40);

    //obj 2
    //level 1
    BLOCK1=new Box    (540,90,30,40);
    BLOCK2=new Box    (570,90,30,40);
    BLOCK3=new Box    (600,90,30,40);
    BLOCK4=new Box    (630,90,30,40);
    BLOCK5=new Box    (660,90,30,40);
    //level 2
    BLOCK6=new Box    (570,50,30,40);
    BLOCK7=new Box    (600,50,30,40);
    BLOCK8=new Box    (630,50,30,40);
    //level 3
    BLOCK9=new Box    (600,10,30,40);
    ball=Bodies.circle(50,200,20);
    World.add(world,ball);
    slingshot=new SlingShot(this.ball,{x:50,y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    obj1.display();
    obj2.display();
    fill ("blue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill ("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill ("purple");
    block13.display();
    block14.display();
    block15.display();
    fill ("green");
    block16.display();
    //obj 2
    fill ("maroon");
    BLOCK1.display();
    BLOCK2.display();
    BLOCK3.display();
    BLOCK4.display();
    BLOCK5.display();
    fill ("dark pink");
    BLOCK6.display();
    BLOCK7.display();
    BLOCK8.display();
    fill("green");
    BLOCK9.display();
    image(polygonImg,ball.position.x,ball.position.y,40,40);
    slingshot.display();

}
function mouseDraged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseRealesed(){
    slingshot.fly();
}