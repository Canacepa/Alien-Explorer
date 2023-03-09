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
                imageSrc : './Img/Level1.png',
            })
            player = new Player({collisionBlocks,
                position : {
                    x: 70,
                    y: 250,
                    width: 33,
                    height: 40,
                  },
                imageSrc : './Img/Player.png'
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
                  imageSrc : './Img/Player.png'
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
                    y: 900,
                    width: 33,
                    height: 40,
                  },
                  imageSrc : './Img/Player.png'
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
                    x: 70,
                    y: 1000,
                    width: 33,
                    height: 40,
                  },
                  imageSrc : './Img/Player.png'
                })
        }
    },
    5 : {
        init() {
            parsedCollisions = level5.parse2D(),
            collisionBlocks =  parsedCollisions.createObjectsFrom2D()
            background = new Sprite ({
                position: {
                    x: 0,
                    y: 0,
                    width : 1800,
                    height : 1125,
                },
                imageSrc : './Img/Level5.png',
            })
            player = new Player({collisionBlocks,
                position : {
                    x: 900,
                    y: 1000,
                    width: 33,
                    height: 40,
                  },
                  imageSrc : './Img/Player.png'
                })
        }
    },
}


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
