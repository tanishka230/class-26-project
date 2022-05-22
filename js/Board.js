class Board{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        this.image=loadImage("./assets/board.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height)
        pop();
    }
}