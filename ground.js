class Ground extends BaseClass{
    constructor(x,y,width,height){
  super(x,y,width,height);
  this.width=width;
  this.height=height;

  var options={
      isStatic:true
  }
  this.body =Bodies.rectangle(x,y,this.width,this.height,options);
  console.log(this.body)
  this.image=loadImage("sprites/ground.png")
    }
}