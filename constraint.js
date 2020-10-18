
class Chain{
    constructor(bodya,bodyb){
        var options={
            bodyA: bodya,
            bodyB: bodyb,
            stiffness:0.02,
            length: 8,
     }

       this.chain=Matter.Constraint.create(options)
       World.add(world,this.chain);
 }
display(){

var pointA=this.chain.bodyA.position;
var pointB=this.chain.bodyB.position;
 strokeWeight(3) ;
  line(pointA.x,pointA.y,pointB.x,pointB.y) ;
}
}




