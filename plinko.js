class Plinko{
    constructor(x,y,width,height){
        var options={
            isStatic: true,
        }

    this.body= Bodies.circle(x,y,15,options);
    this.radius=this.body.circleRadius;
    World.add(world,this.body);

    }


    display(){

    var pos = this.body.position;
    push();
    fill("bisque");
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,this.radius);
    pop();

    }
}