class thoughtBubble extends Sprite{
    constructor({collisionBlocks = [], imageSrc, frameRate, animations}){
        super({imageSrc, frameRate, animations})
        this.position = {
            x: 180,
            y: 280
        }
        this.frameBuffer = 64

    }


    update()
    {

    }
}