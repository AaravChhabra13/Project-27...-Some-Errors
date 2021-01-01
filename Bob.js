class Bob{

    constructor(x,y,radius){

        var ballopt={
            isStatic:true,
            friction:0.5,
            restitution:0.3,
            density:1.2
        }

        this.body=Bodies.circle(x,y,radius/2,ballopt);
        this.radius=radius;
        World.add(world,this.body);
     }

     display(){
         var pos=this.body.position;

         push();
         translate(pos.x,pos.y);
         ellipseMode(CENTER);
         fill("pink");
         ellipse(0,0,this.radius,this.radius);
         pop();
     }
}