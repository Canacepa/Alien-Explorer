class Player {
    constructor(collisionBlocks) {
        this.width = 66;
        this.height = 92;
        this.positionX = 75;
        this.positionY = 920;
        this.velocityX = 0;
        this.velocityY = 0;
        this.gravity = 1
        this.collisionBlocks = collisionBlocks
        console.log(collisionBlocks[0])
        if (this.collisionBlocks[0] === 'MapBlock'){console.log('true')}
    }
    draw(){
        c.fillStyle = 'purple'
        c.fillRect(this.positionX, this.positionY, this.width, this.height)
    }
    update(){
        this.positionX += this.velocityX
        
        // Horizontal
        for (let i = 0; i< this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            if (this.positionX <= collisionBlock.position.x + collisionBlock.width &&
                this.positionX + this.width >= collisionBlock.position.x &&
                this.positionY + this.height >= collisionBlock.position.y &&
                this.positionY <= collisionBlock.position.y + collisionBlock.height){
                    if (this.velocityX < 0) {
                        this.positionX = collisionBlock.position.x + collisionBlock.width +0.01
                        break
                    } 
                    if (this.velocityX > 0){
                        this.positionX = collisionBlock.position.x - this.width -0.01
                        break
                    }

                }

        }

        this.positionY += this.velocityY
        if (this.positionY + this.height + this.velocityY < canvas.height) {
            this.velocityY += this.gravity
        } else {
            this.velocityY = 0;
        }

        // Vertical
        for (let i = 0; i< this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            if (this.positionX <= collisionBlock.position.x + collisionBlock.width &&
                this.positionX + this.width >= collisionBlock.position.x &&
                this.positionY + this.height >= collisionBlock.position.y &&
                this.positionY <= collisionBlock.position.y + collisionBlock.height){
                    // Horizontal
                    if (this.velocityY < 0) {
                        this.velocityY = 0
                        this.positionY = collisionBlock.position.y + collisionBlock.height +0.01
                        break
                    } 
                    if (this.velocityY > 0){
                        this.velocityY = 0
                        this.positionY = collisionBlock.position.y - this.height -0.01
                        break
                    }

                }
        }
    }
}