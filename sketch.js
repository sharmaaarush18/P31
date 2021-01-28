const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionheight = 300

function setup() {
  createCanvas(487,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0,800,960,10)

  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,75,10,10));
  }

  for (var j = 15; j <= width-10; j = j + 50){
    plinkos.push(new Plinko(j,175,10,10));
  }

  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275,10,10));
  }

  for (var j = 15; j <= width-10; j = j + 50){
    plinkos.push(new Plinko(j,375,10,10));
  }

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionheight/2, 10 , divisionheight));
  }
  


  Engine.run(engine);
}

function draw() {
  background(0);
  Engine.update(engine)

  for (var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
  }

  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  ground.display()
  drawSprites();
}