class Drops{
    constructor(x,y,width,height)
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
     }   
    display(){
        background(0);
    Engine.update(engine);
    rectMode(CENTER); 
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(drops.position.x, drops.position.y, 20, 20);
    var maxDrops=100;
    for(var i=0; i<maxDrops; i++){
        drops.push=new createDrop(random(0,400), random(0,400));
    }
}
