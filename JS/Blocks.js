Array.prototype.parse2D = function () {
    const rows = []
    for (let i = 0; i < this.length; i += 40) {
        rows.push(this.slice(i, i + 40))
    }
    
    return rows
}

Array.prototype.createObjectsFrom2D = function () {
    const objects = []
    this.forEach((row, y) => {
        row.forEach((symbol, x) => {
            if (symbol === 157) {
                objects.push(
            new MapBlock({
                position: {
                    x: x * 45,
                    y: y * 45,
                },
            })
            )
        }  
            else if (symbol === 158) {
                objects.push(
            new PoolBlock({
                position: {
                    x: x * 45,
                    y: (y * 45) + 15,
                },
            })
            )
        }  
            else if (symbol === 159) {
                objects.push(
            new ExitBlock({
                position: {
                    x: x * 45,
                    y: y * 45,
                },
            })
            )
        }  
    })
})

     return objects
}

class MapBlock {
    constructor({ position }) {
        this.position = position
        this.width = 45
        this.height = 45
        this.type = 'Map'
    }
    
    draw() {
        c.fillStyle = 'rgba(255, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class PoolBlock {
    constructor({ position }) {
        this.position = position
        this.width = 45
        this.height = 30
        this.type = 'Pool'
    }
    
    draw() {
        c.fillStyle = 'rgba(0, 0, 255, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
class ExitBlock {
    constructor({ position }) {
        this.position = position
        this.width = 45
        this.height = 45
        this.type = 'Exit'
    }
    
    draw() {
        c.fillStyle = 'rgba(0, 255, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}