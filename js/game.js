const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth -30;
canvas.height = innerHeight - 10;
canvas.style.position = 'center';


const parsedCollisions = collisionsLevel1.parse2D()

const collisionBlocks = parsedCollisions.createObjectsFrom2D()

function generateRandom(min = 0, max = 100) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

const background = new Sprite({
    position: {
    x:0,
    y:0,
    }, 

imageSrc: "./img/map.png"

})
const player = new Player({
    collisionBlocks, 
    imageSrc: './img/king/idle.png',
    frameRate: 11,
    animations: {
        idleRight: {
            frameRate: 11,
            frameBuffer: 6,
            loop: true,
            imageSrc: './img/king/idle.png'
        },
        idleLeft: {
            frameRate: 11,
            frameBuffer: 6,
            loop: true,
            imageSrc: './img/king/idleLeft.png'
        },
        runRight: {
            frameRate: 8,
            frameBuffer: 8,
            loop: true,
            imageSrc: './img/king/runRight.png'
        },
        runLeft: {
            frameRate: 8,
            frameBuffer: 8,
            loop: true,
            imageSrc: './img/king/runLeft.png'
        }
    }
})
const thought = new thoughtBubble({
    collisionBlocks,
    imageSrc:'./img/Thought.png',
    frameRate: 8,
    animations: {
        idleLeft: {
                frameRate: 8,
                frameBuffer: 64,
                loop: true,
                imageSrc: './img/thought.png'
        },
        idleRight: {
            frameRate: 8,
            frameBuffer: 64,
            loop: true,
            imageSrc: './img/thought.png'
        }
    }
})

function animate(){
    window.requestAnimationFrame(animate);
    ctx.fillStyle = 'Black'
    ctx.fillRect(0,0,canvas.width, canvas.height)


    background.draw()
    collisionBlocks.forEach(collisionBlock =>{
        collisionBlock.draw()
    })
    
    player.draw()
    player.update()
    thought.draw()

}

var popup = document.querySelector("#startPopup")
var startGameButton = document.querySelector("#startGame")

animate()


