window.addEventListener('keydown', (event) => {
  switch (event.key){
      case 'z':
      case 'w':
      case 'ArrowUp':
          if (player.velocityY === 0) {
              player.velocityY = -24
          }
          break;
      case 'd':
      case 'ArrowRight':
          rightPressed = true;
          console.log('right')
          break;
      case 'q':
      case 'a':
      case 'ArrowLeft':
          leftPressed = true;
          console.log('left')
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
          console.log('left')
          break;
  }
})