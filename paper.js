class radius1 {
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restiution:0.3,
            friction:0.5,
            density:1.2
        }
        
        this.radius=radius;
        this.x=x;
        this.y=y;

        
        this.radius=radius;
        this.x=x;
        this.y=y;
       // this.body=Bodies.circle(this.x, this.y, this.radius/2, options)
       this.body = Bodies.circle(x,y,radius,options);
		World.add(world, this.body);
       
      
			
     }
        display() {
            var pos = this.body.position;
            push()
            ellipseMode(CENTER);
            fill("pink");
            
            ellipse(pos.x,pos.y,this.radius,this.radius);
            pop()

           
			
        }
}