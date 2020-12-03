class paper extends BaseClass
{
    constructor(x,y,r){
    super(x,y,r)
    this.image=loadImage("paper.png");
    }
    display(){
        if(keyArrow("DOWN")){
            applyForce(paper.png);
        }
        super.display();
    }
}