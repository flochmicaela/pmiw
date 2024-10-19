//Floch Micaela, Fernandez Maria Pilar. Comisión 1
// link yt
let imagenes = [], textos = [];

let escenaActual;
let anchoCanvas = 640; let altoCanvas = 480;
let miFuente, miFuenteDos;
let rectanguloPresionado;
let sonido;
let rectangulosIzquierda = [], rectangulosDerecha = [], rectangulosCentro = [], rectanguloEspecial = [], rectangulosCuentos = [];
//rectangulos
let xIzq, yIzq, anchoIzq, altoIzq;
let xDer, yDer, anchoDer, altoDer;
let xCen, yCen, anchoCen, altoCen;
let xEsp, yEsp, anchoEsp, altoEsp;
let xTit, yTit, anchoTit, altoTit;
//textos
let xTit2, yTit2, anchoTit2, altoTit2; 
let xCuento, yCuento, anchoCuento, altoCuento;

function preload() {
  miFuente = loadFont('fonts/rans____.ttf');
  miFuenteDos = loadFont('fonts/arial.ttf');
  sonido = loadSound('data/audio.mp3');
  
  let cantidadImagenes = 17;
  for (let i = 0; i < cantidadImagenes ; i++) {
    let rutasImagenes = 'images/img' + i + '.jpg'; //Guardar ruta: rutasImagenes[images/img0.jpg, images/img1.jpg, images/img2.jpg]
    imagenes[i] = loadImage(rutasImagenes);  //Cargar imagen: imagenes[img0, img1, img2]
  }
}

function setup() {
  escenaActual = 1;
  rectanguloPresionado = "Ninguno"; //Detectar si haces clic afuera de los rectangulos para que no pase nada
  createCanvas(anchoCanvas, altoCanvas);
  inicializarRectangulos(rectangulosIzquierda, rectangulosDerecha, rectangulosCentro, rectanguloEspecial, rectangulosCuentos);  
  //Posiciones rectangulos
  xIzq = 80; yIzq = 300; anchoIzq = 160; altoIzq = 60;
  xDer = 400; yDer = 300; anchoDer = 160; altoDer = 60;
  xCen = 240; yCen = 300; anchoCen = 160; altoCen = 60;
  xEsp = 0; yEsp = 420; anchoEsp = 160; altoEsp = 60;
  xTit = 40; yTit = 100; anchoTit = 540; altoTit = 140;
  xTit2 = 40; yTit2 = 0; anchoTit2 = 540; altoTit2 = 300;
  xCuento = 25; yCuento = 350; anchoCuento = 590; altoCuento = 100;  
  //Arreglo de textos
  cargarTextoCuento();
 
}

function draw() {
  //Mostrar la imagen
  image(imagenes[escenaActual], 0, 0);
  console.log('Escena actual: ' + escenaActual);
  //Dibujar rectangulos
  ejecutarRectangulos();
  ejecutarTextos();
}
   
function mousePressed() {
  rectanguloPresionado = detectarRectanguloPresionado();  
  ejecutarBotones();
}
//Reseteo apretando la R 
function keyPressed() {
  resetear();
}
