const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg;
var character, ground, snow=[];

function preload(){
  //adding background images
  backgroundImg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  //creating Ground
  ground = new Ground(400, 380, 800, 10);

  // //creating characters
  character = new Character(600, 250, 150, 250);

  // clearing Snow in every 20 seconds to create space for upcoming snowFall
  setInterval(clearingSnow, 20000);

}

function draw() {
  background(backgroundImg);  
  
  drawSprites();
  
  Engine.update(engine);
  
  character.display();
  if(frameCount%60==0){
    snow.push(new Snow(random(50, 350), 0, 50, 50));
  }

  for (var i = 0; i<snow.length; i++){
    snow[i].display();
  }
}

function keyPressed(){
  if (keyCode == 32){
    // to jump the character
    Matter.Body.applyForce(character.body, character.body.position, {x:0, y:-1});
    console.log(character.body.speed);
  }
}

function clearingSnow(){
  snow = [];
  console.log("clearSnow function is executed");
}