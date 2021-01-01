class Rope{

    constructor(body1,body2,OffsetX,OffsetY){
        this.OffsetX=OffsetX;
        this.OffsetY=OffsetY;
        var opt={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.OffsetX,y:this.OffsetY}
        }

        this.rope=Constraint.create(opt);
        World.add(world,this.rope);
        }

        display(){
            var pointA=this.rope.bodyA.position;
            var pointB=this.rope.bodyB.position;

            strokeWeight(2);

            var Anchor1X=pointA.x;
            var Anchor1Y=pointA.y;

            var Anchor2X=pointB.x;
            var Anchor2Y=pointB.y;

            line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)
        }

    }

    /*class Rope{
        constructor(bodyA, pointB){
            var options = {
                bodyA: bodyA,
                pointB: pointB,
                stiffness: 0.04,
                length: 10
            }
            this.chain = Constraint.create(options);
            World.add(world, this.chain);
        }
    
        display(){
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;
            
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
        }
        
    }*/

