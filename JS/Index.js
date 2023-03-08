const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 70 * 27
canvas.height = 70 * 15

const parsedCollisions = colisionsLevel1.parse2D()
const collisionBlocks =  parsedCollisions.createObjectsFrom2D()
console.log(collisionBlocks)
console.log(collisionBlocks[0])

const backgroundLvl1 = new Sprite ({
    position: {
        x: 0,
        y: 0,
        width : 1890,
        height : 1050,
    },
    imageSrc : '../Img/bgLvl1.jpg',
})

const player = new Player(collisionBlocks)

let upPressed = false;
let rightPressed = false;
let leftPressed = false;


function animate(){
    window.requestAnimationFrame(animate)
    backgroundLvl1.draw()
    collisionBlocks.forEach(CollisionBlock => {
        CollisionBlock.draw()
    })

    player.velocityX = 0
    if (rightPressed) {
        player.velocityX = 5
    } else if (leftPressed) {
        player.velocityX = -5
    }

    player.draw()
    player.update()

}
animate()
