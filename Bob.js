class Bob{
    constructor(x,y,r) {
  
    var options = {
    isStatic : false,
    restitution : 0.3 ,
    friction : 0.5,
    density : 1.2
  }
    this.x=x;
    this.y=y;
    this.r=r;
    this.color = "white";
    this.body = Matter.Bodies.circle(this.x,this.y,this.r,this.options);
  //  World.add(world, this.body);
}
   display() {
     //  var bobpos=this.body.position;
       push();
       translate(this.body.position.x, this.body.position.y);
       fill(this.color);
       ellipse(-300, 280, this.r, this.r);
       pop();
}

}