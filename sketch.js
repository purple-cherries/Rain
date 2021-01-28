const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drop = []


function preload(){
    
}

function setup(){
   var canvas = createCanvas(400,700)
   engine = Engine.create();
   world = engine.world;

     maxDrops = 100
    for(var i=0; i<maxDrops; i++){
        drop.push(new Drops(random(0,400),(0,400)))
    }

  

}



   


function draw(){
    background("black")
    Engine.update(engine);


    for(var i =0; i<maxDrops; i++){
     drop[i].display();
     drop[i].updateY();
    }



  



}

