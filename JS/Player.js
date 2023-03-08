class Player {
    constructor(collisionBlocks) {
        this.position = {
            x: 70,
            y: 900,
            width: 33,
            height: 40,
          }
        this.velocityX = 0;
        this.velocityY = 0;
        this.gravity = 0.1
        this.collisionBlocks = collisionBlocks
        this.image = new Image()
        this.image.src = '../Img/Player.png'

    }
    draw(){
        c.fillStyle = 'purple'
        c.fillRect(this.position.x, this.position.y, this.position.width, this.height)
        c.drawImage(this.image, this.position.x, this.position.y, this.position.width, this.position.height)
    }
    update(){
        this.position.x += this.velocityX
        this.horizontalCollision()
        this.applyGravity()
        this.verticalCollision()
    }
    applyGravity() {
        this.velocityY += this.gravity
        this.position.y += this.velocityY
    }
    horizontalCollision(){
        for (let i = 0; i< this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.position.x + this.position.width >= collisionBlock.position.x &&
                this.position.y + this.position.height >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height){
                    if (collisionBlock.type === 'Map'){
                        if (this.velocityX < 0) {
                            this.position.x = collisionBlock.position.x + collisionBlock.width +0.01
                            break
                        } 
                        if (this.velocityX > 0){
                            this.position.x = collisionBlock.position.x - this.position.width -0.01
                            break
                        }
                    }
                    if (collisionBlock.type === 'Exit') {
                        console.log('Next lvl')
                        level++
                        levels[level].init()
                    }

                }

        }
    }
    verticalCollision(){
        for (let i = 0; i< this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            // console.log(collisionBlock.type)
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.position.x + this.position.width >= collisionBlock.position.x &&
                this.position.y + this.position.height >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height){
                    if (collisionBlock.type === 'Map') {
                        if (this.velocityY < 0) {
                            this.velocityY = 0
                            this.position.y = collisionBlock.position.y + collisionBlock.height +0.01
                            break
                        } 
                        if (this.velocityY > 0){
                            this.velocityY = 0
                            this.position.y = collisionBlock.position.y - this.position.height -0.01
                            break
                        }
                    }
                    if (collisionBlock.type === 'Pool') {
                        if (this.velocityY < 0) {
                            this.velocityY = 0
                            this.position.y = collisionBlock.position.y + collisionBlock.height +0.01
                            console.log('DEATH')
                            break
                        } 
                        if (this.velocityY > 0){
                            this.velocityY = 0
                            this.position.y = collisionBlock.position.y - this.position.height -0.01
                            console.log('DEATH')
                            break
                        }
                    }
                    // if (collisionBlock.type === 'Exit') {
                    //     if (this.velocityY < 0) {
                    //         console.log('Next lvl')
                    //     } 
                    //     if (this.velocityY > 0){
                    //         console.log('Next lvl')
                    //         level++
                    //     }
                    // }
                }
        }
    }
}