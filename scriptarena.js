import Player from "./players.js";
import Inimigo from "./inimigo.js";
import Bandido from "./bandido.js";



const pad = document.querySelector(".tela1");
const ctx = pad.getContext("2d");

pad.width = innerWidth;
pad.height = innerHeight;

const bandido = new Bandido(pad.width, pad.height);
const inimigo = new Inimigo(pad.width, pad.height);
const player = new Player(pad.width, pad.height);
const playerprojeteis = [];


const keys = {
    shoot: {
        pressed:false,
        released: true
        },

    golpe: {
        pressed:false,
        released: true
        }    

};

const drawprojeteis = () => {
    playerprojeteis.forEach((projeteis)=> {
        projeteis.draw(ctx)
        projeteis.update();
    })
};


const gameloop = () => {
    ctx.clearRect(0, 0, pad.width, pad.height);

    drawprojeteis();
    


    if (keys.shoot.pressed && keys.shoot.released){
        player.shoot(playerprojeteis);
        keys.shoot.released = false;
        console.log("shoot")        
    }
 
    

 
    player.draw(ctx);
    inimigo.draw(ctx);

    
    requestAnimationFrame(gameloop);
};

 
addEventListener("keydown", (event) => {
    const key = event.key.toLocaleLowerCase();
    if (key === "1") keys.shoot.pressed = true
});

addEventListener("keyup", (event) => {
    const key = event.key.toLocaleLowerCase();

    if (key === "1") {
        keys.shoot.pressed = false;
        keys.shoot.released = true;
    };
});




gameloop();