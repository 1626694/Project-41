class Umbrella{
    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage("Walking Frame/walking_1.png")
    }
    display(){
        this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
    }
}