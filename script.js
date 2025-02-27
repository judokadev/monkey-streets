import Player from "./player.js";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const player = new Player(canvas.width, canvas.height);

const keys = {
    left: false,
    right: false,
    up: false,
    down: false,
}

const gameloop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (keys.left && player.position.x > 0) {player.moveleft()}

    if (keys.right && player.position.x <= canvas.width - player.width - 15) {
        player.moveright()}
    if (keys.up  && player.position.y > 0) {player.moveup()
    }
    if (keys.down && player.position.y <=canvas.height - player.height> 0) {
        player.movedown()
    }

    player.draw(ctx)

    requestAnimationFrame(gameloop)
};



addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    
    if (key === "a"){
        keys.left = true;
    }

    if (key === "d"){
        keys.right = true;
    }

    if (key === "w"){
        keys.up = true;
    }

    if (key === "s"){
        keys.down = true;
    }
});

addEventListener("keyup", (event) => {
    const key = event.key.toLowerCase();
    
    if (key === "a"){
        keys.left = false;
    }

    if (key === "d"){
        keys.right = false;
    }

    if (key === "w"){
        keys.up = false;
    }

    if (key === "s"){
        keys.down = false;
    }
});

gameloop();