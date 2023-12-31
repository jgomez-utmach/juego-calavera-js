const canvas = document.getElementById('game');
const game = canvas.getContext('2d');
window.addEventListener('load', draw);

function draw() {
  //Variable que contendrá el tamaño del canvas.
  let canvasSize;

  //condicional que busca que el canvas sea cuadrado, por lo que se evalúa si la altura es mayor que el ancho.
  if (window.innerHeight > window.innerWidth) {
    //Si la altura de la ventana es mayor que el ancho, el tamaño de canvasSize será el ancho de la ventana por 0.8.
    canvasSize = window.innerWidth * 0.8;
  } else {
    //Caso contrario el tamaño de canvasSize será el alto de la ventana por 0.8.
    canvasSize = window.innerHeight * 0.8;
  }

  //Se establece el tamaño del canvas.
  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);

  //Variable que contendrá el tamaño de los elementos del juego.
  const elementsSize = canvasSize / 10;

  console.log({ canvasSize, elementsSize });
  
  //Definimos el tamaño de los elementos del juego.
  game.font = elementsSize + 'px Verdana';
  game.textAlign = 'end';

  //Repite el proceso que dibuja el emoji 10 veces.
  for (let i = 1; i <= 10; i++) {
    //Dibujamos el emoji en la posición x = elementsSize, y = elementsSize * i.
    game.fillText(emojis['X'], elementsSize * i, elementsSize);
  }
}
