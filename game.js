const canvas = document.getElementById('game');
const game = canvas.getContext('2d');

const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');

let canvasSize;
let elementsSize;

const playerPosition = {
  x: undefined,
  y: undefined,
};

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }
  
  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);
  
  elementsSize = canvasSize / 10;

  draw();
}

function draw() {
  game.font = elementsSize + 'px Verdana';
  game.textAlign = 'end';

  const map = maps[1];
  const mapRows = map.trim().split('\n');
  const mapRowCols = mapRows.map(row => row.trim().split(''));


  game.clearRect(0,0,canvasSize, canvasSize);

  mapRowCols.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const emoji = emojis[col];
      const posX = elementsSize * (colIndex + 1);
      const posY = elementsSize * (rowIndex + 1);

    
      if (col == 'O') {
      
        if (!playerPosition.x && !playerPosition.y) {
        
          playerPosition.x = posX;
          playerPosition.y = posY;
          console.log({playerPosition});
        }
      }

      game.fillText(emoji, posX, posY);
    });
  });


  movePlayer();
}

function movePlayer() {
  game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
}

window.addEventListener('keydown', moveByKeys);
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveByKeys(event) {
  if (event.key == 'ArrowUp') moveUp();
  else if (event.key == 'ArrowLeft') moveLeft();
  else if (event.key == 'ArrowRight') moveRight();
  else if (event.key == 'ArrowDown') moveDown();
}

//Validar que el jugador no se salga del mapa
function moveUp() {
  if (Math.ceil(playerPosition.y - elementsSize) < elementsSize) {
    console.log('OUT', playerPosition.y, elementsSize, Math.ceil(playerPosition.y - elementsSize));
  } else {
    playerPosition.y -= elementsSize;
    draw();
  }
}
function moveLeft() {
  console.log('Me quiero mover hacia izquierda');

  if (Math.ceil(playerPosition.x - elementsSize) < elementsSize) {
    console.log('OUT', playerPosition.x, elementsSize, Math.ceil(playerPosition.x - elementsSize));
  } else {
    playerPosition.x -= elementsSize;
    draw();
  }
}
function moveRight() {
  console.log('Me quiero mover hacia derecha');

  if (Math.floor(playerPosition.x + elementsSize) > canvasSize) {
    console.log('OUT', playerPosition.x, canvasSize, Math.floor(playerPosition.x + elementsSize));
  } else {
    playerPosition.x += elementsSize;
    draw();
  }
}
function moveDown() {
  console.log('Me quiero mover hacia abajo');
  
  if (Math.floor(playerPosition.y + elementsSize) > canvasSize) {
    console.log('OUT', playerPosition.y, canvasSize, Math.floor(playerPosition.y + elementsSize));
  } else {
    playerPosition.y += elementsSize;
    draw();
  }
}
