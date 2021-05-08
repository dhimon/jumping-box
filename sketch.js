var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,600);

    //create 4 different surfaces
      block1=createSprite(200,580,200,20);
      block2=createSprite(400,580,200,20);
      block3=createSprite(600,580,200,20);
      block4=createSprite(800,580,200,20);
      block1.shapeColor="cyan"
      block2.shapeColor="purple"
      block3.shapeColor="red"
      block4.shapeColor="yellow"



    //create box sprite and give velocity
      box = createSprite(10,10,35,35);
      box.shapeColor = "white"
      box.velocityX = 6;
      box.velocityY = 6;      
}

function draw() {
    background(rgb(169,169,169));
    drawSprites()
    //create edgeSprite
      edges = createEdgeSprites()
      box.bounceOff(edges);
    
    


    music.play()
    



    //add condition to check if box touching surface and make it box
      if(box.isTouching(block1)&& box.bounceOff(block1)){
         box.shapeColor = "cyan"
      }
      if(box.isTouching(block2)&& box.bounceOff(block2)){
        box.shapeColor = "purple"
     } 
     if(box.isTouching(block3)&& box.bounceOff(block3)){
        box.shapeColor = "red"
     }
     if(box.isTouching(block4)&& box.bounceOff(block4)){
        box.shapeColor = "yellow"
     }
}
