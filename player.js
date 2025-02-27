
class Player {
    constructor(canvaswidth, canvasheight) {
        this.width = 700 / 6;
        this.height = 978 / 6;
        this.velocity = 5;
        this.position = {
            x:canvaswidth / 2 - this.width / 2,
            y:canvasheight / 2 - this.height / 2,
        };

        this.image = this.getImage("macacog.png");

    }


    getImage() {
        const image = new Image();
        image.src = "macacog.png";
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