class Ground {
  constructor(x,y,width,height){
    var options1 = {
      isStatic:true
    }
    this.Body = Bodies.rectangle(x,y,width,height,options1)
    this.width = width;
    this.height = height;
   World.add(world, this.Body)
}
display(){
  var pos = this.Body.position;
  rectMode(CENTER);
  fill(255)
  rect(pos.x,pos.y,this.width,this.height)
}
}
