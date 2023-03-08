window.addEventListener('keydown', (event) => {
  switch (event.key){
      case 'z':
      case 'w':
      case 'ArrowUp':
          if (player.velocityY === 0) {
              player.velocityY = -5
          }
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
      case 'd':
      case 'ArrowRight':
          rightPressed = false;
      case 'q':
      case 'a':
      case 'ArrowLeft':
          leftPressed = false;
          break;
  }
})