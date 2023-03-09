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
    imageSrc : './Img/Sky.png' ,
})


let starting = true
let parsedCollisions = level1.parse2D()
let collisionBlocks =  parsedCollisions.createObjectsFrom2D()
let background
let player
let level
let lives



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
                imageSrc : './Img/BgLvl1.png',
            })
            player = new Player({collisionBlocks,
                position : {
                    x: 70,
                    y: 900,
                    width: 33,
                    height: 40,
                  },
                })
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
                imageSrc : './Img/BgLvl2.png',
            })
            player = new Player({collisionBlocks,
                position : {
                    x: 70,
                    y: 900,
                    width: 33,
                    height: 40,
                  },
                })
        }
    },
    3 : {
        init() {
            parsedCollisions = level3.parse2D(),
            collisionBlocks =  parsedCollisions.createObjectsFrom2D()
            background = new Sprite ({
                position: {
                    x: 0,
                    y: 0,
                    width : 1800,
                    height : 1125,
                },
                imageSrc : './Img/BgLvl2.png',
            })
            player = new Player({collisionBlocks,
                position : {
                    x: 70,
                    y: 900,
                    width: 33,
                    height: 40,
                  },
                })
        }
    },
}




let upPressed = false;
let rightPressed = false;
let leftPressed = false;


function animate(){
    if (starting) return
    window.requestAnimationFrame(animate)
    sky.draw()
    background.draw()
    life.draw()
    collisionBlocks.forEach(CollisionBlock => {
        CollisionBlock.draw()
    })

    player.inputs()
    player.draw()
    player.update()
}

function startScreen() {
    window.requestAnimationFrame(startScreen)
    sky.draw()
    start.draw()
}
function gameOverScreen() {
    window.requestAnimationFrame(startScreen)
    sky.draw()
    gameOver.draw()
}

startScreen()


/************************/
/****    ˶^•ﻌ•^˵ฅ    ****/
/************************/
