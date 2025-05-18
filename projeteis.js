class Projeteis {
    constructor (canvaswidth, canvasheight){
        this.width = 40;
        this.height = 40;
        this.position = {
            x: 470,
            y: 170,
        };
        this.image = this.getImage("poder1.png");
    }

       getImage() {
        const image = new Image();
        image.src = "poder1.png";
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

    update() {
        this.position.x += 4;
    }
}

export default Projeteis