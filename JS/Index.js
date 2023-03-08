const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 45 * 40
canvas.height = 45 * 25

const sky = new Sprite ({
    position: {
        x: 0,
        y: 0,
        width : 1800,
        height : 1125,
    },
    imageSrc : '../Img/Sky.png' ,
})


let parsedCollisions = level1.parse2D()
let collisionBlocks =  parsedCollisions.createObjectsFrom2D()
let background
let player
let level = 1



let levels = {
    1 : {
        init() {
            parsedCollisions = level1.parse2D(),
            collisionBlocks =  parsedCollisions.createObjectsFrom2D()
            background = new Sprite ({
                position: {
                    x: 0,
                    y: 0,
                    width : 1800,
                    height : 1125,
                },
                imageSrc : '../Img/BgLvl1.png',
            })
            player = new Player(collisionBlocks)
        }
    },
    2 : {
        init() {
            parsedCollisions = level2.parse2D(),
            collisionBlocks =  parsedCollisions.createObjectsFrom2D()
            background = new Sprite ({
                position: {
                    x: 0,
                    y: 0,
                    width : 1800,
                    height : 1125,
                },
                imageSrc : '../Img/BgLvl2.png',
            })
            player = new Player(collisionBlocks)
        }
    },
}




let upPressed = false;
let rightPressed = false;
let leftPressed = false;


function animate(){
    window.requestAnimationFrame(animate)
    sky.draw()
    background.draw()
    collisionBlocks.forEach(CollisionBlock => {
        CollisionBlock.draw()
    })

    player.velocityX = 0
    if (rightPressed) {
        player.velocityX = 2
    } else if (leftPressed) {
        player.velocityX = -2
    }

    player.draw()
    player.update()

}

levels[level].init()
animate()
