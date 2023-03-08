Array.prototype.parse2D = function () {
    const rows = []
    for (let i = 0; i < this.length; i += 27) {
        rows.push(this.slice(i, i + 27))
    }
    
    return rows
}

Array.prototype.createObjectsFrom2D = function () {
    const objects = []
    this.forEach((row, y) => {
        row.forEach((symbol, x) => {
            if (symbol === 221) {
                objects.push(
            new MapBlock({
                position: {
                    x: x * 70,
                    y: y * 70,
                },
                type : 'Map'
            })
            )
        }  
            else if (symbol === 222) {
                objects.push(
            new PoolBlock({
                position: {
                    x: x * 70,
                    y: y * 70,
                },
                type : 'Pool'
            })
            )
        }  
            else if (symbol === 223) {
                objects.push(
            new ExitBlock({
                position: {
                    x: x * 70,
                    y: y * 70,
                },
                type : 'Exit'
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
        this.width = 70
        this.height = 70
    }
    
    draw() {
        c.fillStyle = 'rgba(255, 0, 0, 0.5)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class PoolBlock {
    constructor({ position }) {
        this.position = position
        this.width = 70
        this.height = 50
    }
    
    draw() {
        c.fillStyle = 'rgba(0, 0, 255, 0.5)'
        c.fillRect(this.position.x, this.position.y+20, this.width, this.height)
    }
}
class ExitBlock {
    constructor({ position }) {
        this.position = position
        this.width = 70
        this.height = 70
    }
    
    draw() {
        c.fillStyle = 'rgba(0, 255, 0, 0.5)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}