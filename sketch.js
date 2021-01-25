

function preload(){
    
}

function setup(){
 var canvas = createCanvas(400,400)  
  umbrella= new Umbrella(200,300); 
  rainfall = new Rainfall(200,400); 
}

function draw(){
    umbrella.display();
  drops.display();  
}   

