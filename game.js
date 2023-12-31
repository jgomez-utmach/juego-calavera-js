const canvas = document.getElementById('game');
const game = canvas.getContext('2d');

//Declaramos como variables globales el tamaño del canvas y el tamaño de los elementos
let canvasSize;
let elementsSize;

window.addEventListener('load', setCanvasSize);
//añadimos un listener para que cuando se redimensione la pantalla se redimensione el canvas
window.addEventListener('resize', setCanvasSize);

//Separamos la lógica del dibujo (draw) y la lógica que calcula el tamaño del canvas (setCanvasSize)
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

  for (let i = 1; i <= 10; i++) {
    game.fillText(emojis['X'], elementsSize, elementsSize * i);
  }
}
