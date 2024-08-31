//Floch Micaela - Comision 1 - TP3
//https://youtu.be/duVrWeJmRxg

let cuadradosCreados;
let obra;

function preload(){
  obra = loadImage("Data/OpArt.jpg");
}


function setup() {
  cuadradosCreados = 0;
  createCanvas(800,400);
  background(255);
  dibujarCirculos();
}


function draw() {
  dibujarCirculos();
  image(obra,0,0,400,400);  
}

function keyPressed(){ //reinicio al apretar una tecla
  if(cuadradosCreados >= 4){
    reiniciarFondos();
    console.log("Reiniciado");
    cuadradosCreados = 0;
  }
}
function mousePressed(){
  crearCuadrados();
}
