class Ground{
    constructor(x,y,width,height){
    var ground_option = {
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,ground_option);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
}
display(){
    var position= this.body.position;
    rectMode(CENTER);
    rect (position.x,position.y,this.width,this.height);
}

}