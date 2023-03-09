const sky = new Sprite ({
    position: {
        x: 0,
        y: 0,
        width : 1800,
        height : 1125,
    },
    imageSrc : './Img/Sky.png' ,
})

let life 
let livesHUD = {
    0 : {
        init() {
            life = new Sprite ({
                position: {
                    x: 767.5,
                    y: 0,
                    width : 265,
                    height : 45,
                },
                imageSrc : './Img/lives.png',
            })
        }
    },
    1 : {
        init() {
            life = new Sprite ({
                position: {
                    x: 767.5,
                    y: 0,
                    width : 265,
                    height : 45,
                },
                imageSrc : './Img/lives1.png',
            })
        }
    },
    2 : {
        init() {
            life = new Sprite ({
                position: {
                    x: 767.5,
                    y: 0,
                    width : 265,
                    height : 45,
                },
                imageSrc : './Img/lives2.png',
            })
        }
    },
    3 : {
        init() {
            life = new Sprite ({
                position: {
                    x: 767.5,
                    y: 0,
                    width : 265,
                    height : 45,
                },
                imageSrc : './Img/lives3.png',
            })
        }
    },
    4 : {
        init() {
            life = new Sprite ({
                position: {
                    x: 767.5,
                    y: 0,
                    width : 265,
                    height : 45,
                },
                imageSrc : './Img/lives4.png',
            })
        }
    },
    5 : {
        init() {
            life = new Sprite ({
                position: {
                    x: 767.5,
                    y: 0,
                    width : 265,
                    height : 45,
                },
                imageSrc : './Img/lives5.png',
            })
        }
    },

}

let start = new Sprite ({
    position: {
        x: 0,
        y: 0,
        width : 1800,
        height : 1125,
    },
    imageSrc : './Img/Start.png',
})

let gameOver = new Sprite ({
    position: {
        x: 0,
        y: 0,
        width : 1800,
        height : 1125,
    },
    imageSrc : './Img/KO.png',
})

let gameEnd = new Sprite ({
    position: {
        x: 0,
        y: 0,
        width : 1800,
        height : 1125,
    },
    imageSrc : './Img/End.png',
})