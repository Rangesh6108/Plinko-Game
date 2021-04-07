const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 var engine,world;
 var Bgimg;
 var particles = [];
 var plinkos = [];
 var divisions = [];

 var dh=300;

function preload(){

Bgimg=loadImage("BG.png");

}

function setup() {

  createCanvas(1500,1000);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(700,1000,2000,15);

  for(var j = 40;j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 40; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }
  
  for(var j = 40; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,475));
  }

  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,575));
  }

  for(var k = 0; k <=width; k = k + 110){
    divisions.push(new Divisions(k, height-dh/2 , 10 ,dh));
  }

  
}

function draw() {
  background(Bgimg);  

  if(frameCount % 10 ===0){
    particles.push(new Particle(random(10,1490),-10,10,10));
  }

  // ground.display();


  Engine.update(engine , 25);

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  drawSprites();
}