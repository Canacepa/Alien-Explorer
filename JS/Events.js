window.addEventListener('keydown', (event) => {
  switch (event.key){
      case 'z':
      case 'w':
      case 'ArrowUp':
          if (player.velocity.y === 0) {
              player.velocity.y = -5
          }
          upPressed = true
          break;
      case 'd':
      case 'ArrowRight':
          rightPressed = true;
          break;
      case 'q':
      case 'a':
      case 'ArrowLeft':
          leftPressed = true;
          break;
  }
})
window.addEventListener('keyup', (event) => {
  switch (event.key){
      case 'z':
      case 'w':
      case 'ArrowUp':
          upPressed = false
          break;
      case 'd':
      case 'ArrowRight':
          rightPressed = false;
      case 'q':
      case 'a':
      case 'ArrowLeft':
          leftPressed = false;
          break;
      case ' ' :
        if(gameInnactive){
            level = 1
            lives = 5
            gameInnactive = false
            gameStarted =  true
            time.start()
            levels[level].init()
            livesHUD[lives].init()
            animate()
        }
  }
})