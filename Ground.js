class Ground {
    constructor(x, y, width,length) {
      var options = {
          'isStatic':true
      }
      this.body = Bodies.rectangle(x,y,width,length,options);
      this.width = width;
      

      World.add(world, this.body);
    }
    display(){
        
      var pos =this.body.position;
      rect(pos.x, pos.y, width,height);
      fill=color("pink");
    }
  };