class Player extends Sprite {
    constructor({collisionBlocks, position}) {
        super({position})
        this.position = position
        this.velocity = {
            x : 0,
            y : 0,
        }
        console.log(this.velocity)
        this.gravity = 0.1
        this.collisionBlocks = collisionBlocks
        this.image = new Image()
        this.image.src = './Img/Player.png'

    }
    // draw(){
    //     c.fillStyle = 'purple'
    //     c.fillRect(this.position.x, this.position.y, this.position.width, this.height)
    //     c.drawImage(this.image, this.position.x, this.position.y, this.position.width, this.position.height)
    // }
    update(){
        this.position.x += this.velocity.x
        this.horizontalCollision()
        this.applyGravity()
        this.verticalCollision()
    }
    inputs() {
        player.velocity.x = 0
        if (rightPressed) {
            // this.image.src = './Img/WalkRight.gif'
            player.velocity.x = 2
        } else if (leftPressed) {
            player.velocity.x = -2
        //     this.image.src = './Img/WalkLeft.gif'
        // } else {
        //     this.image.src = './Img/Player.png'
        }
        }
    applyGravity() {
        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
    }
    horizontalCollision(){
        for (let i = 0; i< this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.position.x + this.position.width >= collisionBlock.position.x &&
                this.position.y + this.position.height >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height){
                    if (collisionBlock.type === 'Map'){
                        if (this.velocity.x < 0) {
                            this.position.x = collisionBlock.position.x + collisionBlock.width +0.01
                            break
                        } 
                        if (this.velocity.x > 0){
                            this.position.x = collisionBlock.position.x - this.position.width -0.01
                            break
                        }
                    }
                    if (collisionBlock.type === 'Death'){
                        if (this.velocity.x < 0) {
                            this.position.x = collisionBlock.position.x + collisionBlock.width +0.01
                            if (lives > 0){
                                lives --
                                levels[level].init()
                                livesHUD[lives].init()
                            } else {
                                gameOverScreen()
                                gameInnactive = true
                            }
                            break
                        } 
                        if (this.velocity.x > 0){
                            this.position.x = collisionBlock.position.x - this.position.width -0.01
                            if (lives > 0){
                                lives --
                                levels[level].init()
                                livesHUD[lives].init()
                            } else {
                                gameOverScreen()
                                gameInnactive = true
                            }
                            break
                        }
                    }
                    if (collisionBlock.type === 'Exit') {
                        console.log('Next lvl')
                        level++
                        levels[level].init()
                    }
                    if (collisionBlock.type === 'End') {
                        gameFinish()
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
                        if (this.velocity.y < 0) {
                            this.velocity.y = 0
                            this.position.y = collisionBlock.position.y + collisionBlock.height +0.01
                            break
                        } 
                        if (this.velocity.y > 0){
                            this.velocity.y = 0
                            this.position.y = collisionBlock.position.y - this.position.height -0.01
                            break
                        }
                    }
                    if (collisionBlock.type === 'Death') {
                        if (this.velocity.y < 0) {
                            this.velocity.y = 0
                            this.position.y = collisionBlock.position.y + collisionBlock.height +0.01
                            if (lives > 0){
                                lives --
                                levels[level].init()
                                livesHUD[lives].init()
                            } else {
                                gameOverScreen()
                                gameInnactive = true
                            }
                            break
                        } 
                        if (this.velocity.y > 0){
                            this.velocity.y = 0
                            this.position.y = collisionBlock.position.y - this.position.height -0.01
                            if (lives > 0){
                                lives --
                                levels[level].init()
                                livesHUD[lives].init()
                            } else {
                                gameOverScreen()
                                gameInnactive = true
                            }
                            break
                        }
                    }
                    if (collisionBlock.type === 'End') {
                        gameFinish()
                    }
                    
                }
        }
    }
}