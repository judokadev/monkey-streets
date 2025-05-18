class Inimigo {
    constructor (canvaswidth, canvasheight){
        this.width = 120;
        this.height = 140;
        this.position = {x: 760,y: 140,};
        this.image = this.getImage("monge.png");
    }

       getImage() {
        const image = new Image();
        image.src = "monge.png";
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
} 



export default Inimigo