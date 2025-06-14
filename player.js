
class Player {
    constructor(canvaswidth, canvasheight) {
        this.width = 140;
        this.height = 140;
        this.velocity = 5;
        this.position = {
            x:canvaswidth / 2 - this.width / 2,
            y:canvasheight / 2 - this.height / 2,
        };

        this.image = this.getImage();

    }


    getImage() {
        const image = new Image();
        image.src = "./images/personagens/bandido1.png";
        return image;
    }

    moveleft() {
        this.position.x -= this.velocity;
    }

    moveright() {
        this.position.x += this.velocity;
    }

    moveup() {
        this.position.y -= this.velocity;
    }

    movedown() {
        this.position.y += this.velocity;
    }

    draw(ctx) {
        ctx.drawImage( this.image, this.position.x, this.position.y, this.width, this.height);
    }
    
}

export default Player;