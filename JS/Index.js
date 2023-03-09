const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 45 * 40
canvas.height = 45 * 25



let upPressed = false;
let rightPressed = false;
let leftPressed = false;

let gameInnactive = true
let gameStarted = false
let gameEnded = false
let parsedCollisions = level1.parse2D()
let collisionBlocks =  parsedCollisions.createObjectsFrom2D()
let background
let player
let level
let lives

let bestTime


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
                imageSrc : '../Img/Level1.png',
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
                imageSrc : './Img/Level2.png',
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
                imageSrc : './Img/Level3.png',
            })
            player = new Player({collisionBlocks,
                position : {
                    x: 70,
                    y: 250,
                    width: 33,
                    height: 40,
                  },
                })
        }
    },
    4 : {
        init() {
            parsedCollisions = level4.parse2D(),
            collisionBlocks =  parsedCollisions.createObjectsFrom2D()
            background = new Sprite ({
                position: {
                    x: 0,
                    y: 0,
                    width : 1800,
                    height : 1125,
                },
                imageSrc : './Img/Level4.png',
            })
            player = new Player({collisionBlocks,
                position : {
                    x: 900,
                    y: 100,
                    width: 33,
                    height: 40,
                  },
                })
        }
    },
}

let time = new Chronometer()

time.draw()

function animate(){
    if (gameInnactive) return
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
    if (gameStarted) return
    window.requestAnimationFrame(startScreen)
    sky.draw()
    start.draw()
    time.draw()
}
function gameOverScreen() {
    window.requestAnimationFrame(startScreen)
    sky.draw()
    gameOver.draw()
}
function gameFinish() {
    window.requestAnimationFrame(startScreen)
    sky.draw()
    gameEnd.draw()
}

startScreen()


/************************/
/****    ˶^•ﻌ•^˵ฅ    ****/
/************************/
