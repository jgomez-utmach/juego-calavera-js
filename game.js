const canvas = document.getElementById('game');
const game = canvas.getContext('2d');

const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');

let canvasSize;
let elementsSize;

//Creando objeto para la posicion del jugador
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
  console.log({ canvasSize, elementsSize });

  game.font = elementsSize + 'px Verdana';
  game.textAlign = 'end';

  const map = maps[1];
  const mapRows = map.trim().split('\n');
  const mapRowCols = mapRows.map(row => row.trim().split(''));
  console.log({map, mapRows, mapRowCols});

  //Borrar el canvas
  game.clearRect(0,0,canvasSize, canvasSize);

  mapRowCols.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const emoji = emojis[col];
      const posX = elementsSize * (colIndex + 1);
      const posY = elementsSize * (rowIndex + 1);

      //Si col es igual al caracter 'O' que representa la puerta
      if (col == 'O') {
        //y si la posicion x, y del jugador no esta definida
        if (!playerPosition.x && !playerPosition.y) {
          //asignamos las posición inicial del jugador que será la posicion x, y de la puerta
          playerPosition.x = posX;
          playerPosition.y = posY;
          console.log({playerPosition});
        }
      }

      game.fillText(emoji, posX, posY);
    });
  });

  //Ejecutamos funcion dibujar al jugador
  movePlayer();
}

//Funcion dibujar al jugador
function movePlayer() {
  //Dibujamos al jugador en la posicion x, y asignadas a playerPosition
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

//Añadimos el calculo de la posicion del jugador en cada funcion de movimiento
function moveUp() {
  console.log('Me quiero mover hacia arriba');
  //Cuando el jugador se mueva hacia arriba, la posicion y del jugador se reducira en el tamaño de los elementos
  playerPosition.y -= elementsSize;
  //Volvemos a dibujar el canvas
  draw();
}
function moveLeft() {
  console.log('Me quiero mover hacia izquierda');
  playerPosition.x -= elementsSize;
  draw();
}
function moveRight() {
  console.log('Me quiero mover hacia derecha');
  playerPosition.x += elementsSize;
  draw();
}
function moveDown() {
  console.log('Me quiero mover hacia abajo');
  playerPosition.y += elementsSize;
  draw();
}
