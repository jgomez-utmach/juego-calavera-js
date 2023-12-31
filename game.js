const canvas = document.getElementById('game');
const game = canvas.getContext('2d');

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

  //Seleccionamos un mapa
  const map = maps[0];
  //Eliminamos los espacios en blanco (trim) y dividimos por cada salto de línea (split)
  const mapRows = map.trim().split('\n');
  //Recorremos cada elemento de mapRows, eliminamos los espacios en blanco (trim) y luego dividimos por cada caracter (split)
  const mapRowCols = mapRows.map(row => row.trim().split(''));
  console.log({map, mapRows, mapRowCols});

  //Recorremos cada elemento de mapRowCols y lo dibujamos en el canvas
  for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 10; col++) {
      //emojis es un objeto de tipo clave-valor, por lo que podemos acceder a su valor mediante la clave
      game.fillText(emojis[mapRowCols[row - 1][col - 1]], elementsSize * col, elementsSize * row);
    }
  }
}
