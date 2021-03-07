var canvas;
var music;
var edges ;
var surface1;
var surface2;
var surface3;
var surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,500);

    //create 4 different surfaces

surface1 = createSprite(100,490,200,50);
surface1.shapeColor = "red";

surface2 = createSprite(300,490,200,50);
surface2.shapeColor = "green";

surface3 = createSprite(500,490,200,50);
surface3.shapeColor = "gold";

surface4 = createSprite(700,490,200,50);
surface4.shapeColor = "blue";

    //create box sprite and give velocity
box = createSprite(random(20,790));
box.shapeColor = "white";
box.scale = 0.5;
box.velocityY = 6;

}

function draw() {
    background("Black");
    //create edgeSprite
edges = createEdgeSprites();
box.bounceOff(edges);

if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor = "red";
    box.velocityX = 8;
    music.play();

}

if(surface2.isTouching(box)){
    box.shapeColor = "purple";
    box.velocityX = 0;
    box.velocityY = 0;
    music.stop();
}

if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor = "gold";
    box.velocityX = 8;
    music.play();
}

if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor = "blue";
    box.velocityX = 8;
    music.play();
}
    

    

     
        
        
    
drawSprites();
    //add condition to check if box touching surface and make it box
  
}
