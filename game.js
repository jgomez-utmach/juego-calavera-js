const canvas = document.getElementById('game');
const game = canvas.getContext('2d');

//Seleccionando etiquetas button con el id: up, left, right, down
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');

let canvasSize;
let elementsSize;

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

  const map = maps[0];
  const mapRows = map.trim().split('\n');
  const mapRowCols = mapRows.map(row => row.trim().split(''));
  console.log({map, mapRows, mapRowCols});

  mapRowCols.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const emoji = emojis[col];
      const posX = elementsSize * (colIndex + 1);
      const posY = elementsSize * (rowIndex + 1);
      game.fillText(emoji, posX, posY);
    });
  });
}

//Añadimos un evento listener al teclado de tipo keydown
/*
  Nota: existen otros eventos como:
    1) keydown: se ejecuta cuando se presiona una tecla
    2) keyup: se ejecuta cuando se suelta una tecla
    3) keypress: se ejecuta cuando se presiona una tecla y se mantiene presionada
    
    keydown y keypress se ejecutan al mismo tiempo, pero keypress se ejecuta varias veces mientras se mantiene presionada la tecla
*/
window.addEventListener('keydown', moveByKeys);
//Añadimos un evento listener de tipo click a los botones del html
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

//Creamos función que recibe el evento del teclado
function moveByKeys(event) {
  if (event.key == 'ArrowUp') moveUp();
  else if (event.key == 'ArrowLeft') moveLeft();
  else if (event.key == 'ArrowRight') moveRight();
  else if (event.key == 'ArrowDown') moveDown();
}

//Creamos funciones para cada botón
function moveUp() {
  console.log('Me quiero mover hacia arriba');
}
function moveLeft() {
  console.log('Me quiero mover hacia izquierda');
}
function moveRight() {
  console.log('Me quiero mover hacia derecha');
}
function moveDown() {
  console.log('Me quiero mover hacia abajo');
}
