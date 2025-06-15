import projeteis from "./projeteis.js";

class Bandido {
    constructor (canvaswidth, canvasheight){
        this.width = 200;
        this.height = 160;
        this.position = {
            x: 400,
            y: 120,
        };
        this.image = this.getImage();
    }

       getImage() {
        const image = new Image();
        image.src = "./images/personagens/bandido1.png";
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



export default Bandido