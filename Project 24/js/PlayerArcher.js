class PlayerArcher {

    constructor(x, y, width, height, angle){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.body = Bodies.rectangle(x, y, width, height);
        Matter.Body.setAngle(this.body, -PI/2);
        this.image = loadImage("./assets/playerArcher.png");
        World.add(world, this.body);
    }

    display() {
        

        if (keyIsDown(UP_ARROW) && this.angle < 0.35){
            this.angle -= 0.05;
        }
        else{

        }

        if (keyIsDown(DOWN_ARROW) && this.angle > -1.45){
            this.angle += 0.05;
        }

        push()
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();



    }


}