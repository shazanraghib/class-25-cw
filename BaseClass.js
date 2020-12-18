 class BaseClass{
    constructor(x,y,width,height){
        //this.angle=angle;   
        this.width =width;
        this.height =height; 
        var options={ 
           restitution:0.5,
           friction:1,
           density:500,
        } 
        this.body =Bodies.rectangle(x,y,this.width,this.height,options);
        this.image=loadImage("sprites/base.png");
        World.add(world, this.body); 
       } 
       display(){ 
       var pos=this.body.position;
       var angle=this.body.angle;
       push()  
       angleMode(RADIANS)
       translate(pos.x,pos.y)
       rotate(angle)  
       imageMode(CENTER); 
       image(this.image ,0,0, this.width,this.height );
       pop() 
     } 
 }