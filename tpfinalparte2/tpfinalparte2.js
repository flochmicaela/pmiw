// Floch Micaela, Fernandez Maria Pilar. Comision 1.
// link yt
let objJuego, imagenes = [], sonidos = [];

function preload() {
  let cantidadSonidos = 4;
  for (let i = 0; i < cantidadSonidos; i++){
     let rutasSonidos = 'data/audio' + i + '.mp3';
     console.log(rutasSonidos);
     sonidos[i] = loadSound(rutasSonidos);
  }
  
  
  let cantidadImagenes = 10;
  for (let i = 0; i < cantidadImagenes ; i++) {
    let rutasImagenes = 'images/img' + i + '.png'; //Guardar ruta: rutasImagenes[images/img0.jpg, images/img1.jpg, images/img2.jpg]
    imagenes[i] = loadImage(rutasImagenes);  //Cargar imagen: imagenes[img0, img1, img2]
  }
}

function setup() {
  createCanvas(640,480);
  objJuego = new Juego();
}

function draw() {
  objJuego.chequeos();
}

function keyPressed(){
  objJuego.teclaApretada(keyCode);
}

function mousePressed(){
  objJuego.mouseApretado();
}
