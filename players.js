import projeteis from "./projeteis.js";

class Player {
    constructor (canvaswidth, canvasheight){
        this.width = 100;
        this.height = 140;
        this.position = {
            x: 400,
            y: 140,
        };
        this.image = this.getImage("duende.png");
    }

       getImage() {
        const image = new Image();
        image.src = "duende.png";
        return image;
    }
 
     draw(ctx) {
        ctx.drawImage( 
            this.image, 
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height);
    }


    shoot(projetil){
        const p = new projeteis({
            x:this.position.x + this.width / 2 + 40,
            y:this.position.y + 30,},
            2
        );

        projetil.push(p);
    }

} 



export default Player