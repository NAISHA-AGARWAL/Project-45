class Can{
    constructor(x,y,width,height){
var options={
    isStatic:false,
    restitution:0.4,
    friction:0.01

}
this.ground = Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height= height;
this.image=loadImage("unnamed.png");
this.visibility=255;
World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        if(this.body.speed<2){
            imageMode(CENTER); 
            image(this.image,pos.x,pos.y,this.width, this.height);

        }
        else{
World.remove(world,this.body);
push()
this.visibility=this.visibility-5;
tint(255,this.visibility);
image(this.image, this.body.position.x, 
    this.body.position.y,this.width, this.height);
    pop();
        }
    }
}