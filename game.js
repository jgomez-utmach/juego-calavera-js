const canvas = document.getElementById('game');
//Obtiene el contexto de dibujo 2D del canvas. Este contexto se utilizará para dibujar en el canvas.
const game = canvas.getContext('2d');

//Cuando la página se carga completamente, se llama a la función 'draw'.
window.addEventListener('load', draw);

function draw() {
  /*
  //Establece el color de relleno del contexto del canvas en rojo.
  game.fillStyle = 'red';

  //Dibuja un cuadrado de 100w x 100h en el contexto del canvas. El cuadrado comienza en la posición (x=0,y=0).
  game.fillRect(0, 0, 100, 100);

  //Borra un cuadrado de 50w x50h en el contexto del canvas. El cuadrado comienza en la posición (x=50,y=50).
  game.clearRect(50, 50, 50, 50);
  */

  //Establece el color de relleno del contexto del canvas en azul.
  game.fillStyle = 'blue';
  //Establece la fuente y el tamaño de la fuente.
  game.font = 'bold 40px Arial';
  //El texto se alinea a partir del centro.
  game.textAlign = 'center';
  //Dibuja el texto en el contexto del canvas. El texto comienza en la posición (x=50,y=50).
  game.fillText('johnny', 50, 50);
}
