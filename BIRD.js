class Abird extends Baseclass{
    constructor(x, y, width, height) {
     super(x,y,width,height);
      this.image = loadImage("images/bird.png");
      
    }
    display(){
      var pos =this.body.position;
     // pos.x=mouseX;
      //pos.y=mouseY;
      super.display();
    }
  }