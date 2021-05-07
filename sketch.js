const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
   // getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(3000,800);
  
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
   
    box5 = new Box(810,160,70,70);
  
    ball = new Ball(200,500,80,80);

    rope = new Rope(ball.body,{x:500, y:150});
}

function draw(){
           background("blue");
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   
    box3.display();
    box4.display();
   
    box5.display();
  
    ball.display();
    
    rope.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    rope.fly();
    gameState = "launched";
}



