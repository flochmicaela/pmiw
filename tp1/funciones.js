// FUNCION 1
function circulosUno(posXInicial, posYInicial) {
  let aux= 2.5;
  let tamañoUno= 190;
  let tamañoNuevo= 0;
  let tamañoAux= 0;
  let centroXSegundaParte= 0;
  let centroYSegundaParte= 0;

  for (let i=0; i<22; i++) {
    if (i%2 === 0) {
      fill(0);
    } else {
      fill(255);
    }
    tamañoNuevo=tamañoUno-aux*3*i;

    if (i===9) {
      tamañoAux = tamañoNuevo;
      centroXSegundaParte=posXInicial+aux*i;
      centroYSegundaParte=posYInicial-aux*i;
    }
    if (i<10) {
      ellipse(posXInicial+aux*i,posYInicial-aux*i,tamañoNuevo,tamañoNuevo);
    } else {
      let posX = round(map(mouseX, centroXSegundaParte - tamañoNuevo * 8, centroXSegundaParte + tamañoNuevo * 8, -10, 10));
      let posY = round(map(mouseY, centroYSegundaParte + tamañoNuevo * 8, centroYSegundaParte - tamañoNuevo * 8, -10, 10));

      ellipse(centroXSegundaParte + posX, centroYSegundaParte - posY, tamañoNuevo, tamañoNuevo);
    }
  }
}
//FUNCION 2
function dibujarCirculos() {
  stroke(0);
  circulosUno(500, 100);
  circulosUno(500, 300);
  circulosUno(700, 100);
  circulosUno(700, 300);
}
//FUNCION 3
function obtenerColorRandomEntreDosValores(valor1, valor2) {
  let nuevoColor;
  nuevocolor = round(random(valor1, valor2));
  return nuevocolor;
}
//FUNCION 4
function crearCuadrados() {
  for (let i=0; i<=1; i++) {
    for (let j=0; j<=1; j++) {
      if (round(random(1)) === 0) {
        noStroke();
        let r = obtenerColorRandomEntreDosValores(0, 255);
        let g = obtenerColorRandomEntreDosValores(0, 255);
        let b = obtenerColorRandomEntreDosValores(0, 255);
        fill(r,g,b);
        rect(400+200*i,0+200*j,200,200);
        cuadradosCreados++;
      }
    }
  }
}
// FUNCION 5
function reiniciarFondos() {
  for (let i=0; i<=1; i++) {
    for (let j=0; j<=1; j++) {
      noStroke();
      fill(255);
      rect(400+200*i,0+200*j,200,200);
    }
  }
}
