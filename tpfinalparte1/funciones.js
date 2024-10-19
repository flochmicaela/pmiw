function cargarTextoCuento(){
  textos[2] = "A mitad del largo zanguán del hotel pensó que debía ser tarde, y se apuró a salir a la calle y sacar la motocicleta del rincon donde el portero de al lado le permitia guardarla. En la joyeria de la esquina vio que eran las nueve menos diez, llegaria con tiempo sobrado adonde iba. La moto ronroneaba entre sus piernas y un viento fresco le chicoteaba los pantalones. Una calle larga, bordeada de arboles, algo distraido pero corriendo sobre la derecha como correspondia, se dejo llevar por la travesura. Tal vez su involutario relajamiento le impidio prevenir el accidente. Cuando vio que la mujer parada en la esquina se lanzaba a la calzada a pesar de las luces verdes, ya era tarde para soluciones faciles.";
  textos[4] = "Volvió bruscamente del desmayo. Sentía gusto a sal y sangre y gritó porque no podia soportar la presión en el brazo derecho. Mientras lo llevaban boca arriba y lo subían a una camilla blanda donde pudo tenderse a gusto dió sus señas al policial que lo acompañaba. Una pieza con olor a hospital, las enfermeras bromeaban todo el tiempo. Lo llevaron a la sala de radio y veinte minutos despues a la sala de operaciones.. Alguien de blanco, alto y delgado se le acercó sonriendo con algo que le brillaba en la mano derecha. Le palmeo una mejilla e hizo una seña a alguien parado atrás.";
  textos[6] = "El brazo casi no le dolía; se sentía bien, era un accidente de mala suerte, unas semanas quieto y nada más. El vigilante le dijo que la motocicleta no parecía muy estropeada. <Natural -dijo él-. Como que me la lige encima...>Los dos se rieron y el vigilante le dió la mano y le deseo buena suerte. Luego de una semana el doctor llegó con la buena noticia del alta médica, podía marcharse y continuar con su vida como si nada hubiese sucedido.";
  textos[7] = "Como un sueño era curioso porque estaba lleno de olores y él nunca soñaba olores. Primero un olor a pantano que cesó, y en cambio vino una fragancia compuesta y oscura como la noche en que se movía huyendo de los aztecas. Tenía que huir de los aztecas que andaban a caza de hombre. <<Huele a guerra>> pensó. Tocando instintivamente el puñal de piedra atravesado en su ceñidor de lana tejida. Un sonido inesperado lo hizo agacharse y quedar inmovil temblando. Tener miedo no era extraño, no se oÍa nada, pero el miedo seguÍa allÍ como el olor. HabÍa que seguir, llegar al corazÓn de la selva evitando las cienagas. En el sendero en tinieblas, buscó el rumbo. Entonces sintió una bocanada horrible del olor que más temía, y saltó desesperado hacia adelante.";
  textos[9] = "-Se va a caer de la cama- dijo el enfermero de al lado-. No brinque tanto amigazo. Abrió los ojos y era tarde, con el sol ya bajo en los ventanales de la larga sala. Sintió sed, como si hubiese estado corriendo kilometros. Vió llegar un carrito blanco que pusieron al lado de su cama, una enfermera rubia le frotó con alcohol la cara anterior del muslo y le clavó una gruesa aguja con un tubo que subía hasta un frasco de líquido opalino. Caía la noche y la fiebre lo iba arrastrando blandamente, cuando los ventanales de enfrente viraron a manchas de un azul oscuro, pensó que no le iba a ser difícil dormirse.";
  textos[11] = "Primero fue una confusión, comprendía que estaba corriendo en plena oscuridad. <La calzada -pensó-. Me salí de la calzada>. Sus pies se hundían en un colchon de hojas y barro y ya no podía dar un paso más sin que las ramas de los arbustos le azotaran el torso y las piernas. Pensó en los muchos prisioneros que ya habían hecho, pero la cantidad no contaba, sino el tiempo sagrado. La caza continuaría hasta que los sacerdotes dieran la señal de regreso. Todo tenía su numero y su fin, y él estaba dentro del tiempo sagrado, del otro lado de los cazadores. El olor a guerra era insoportable, y cuando el primer enemigo le saltó al cuello casi sintió el placer en hundirle la hoja de piedra en pleno pecho. Y entonces, una soga lo atrapo desde atrás.";
  textos[14] = "-Es la fiebre- dijo el de la cama de al lado-. A mí me pasaba igual cuando me operé del duodeno. Tome agua y va a ver que duerme bien. Al lado de la noche de donde volvía, la penumbra tibia de la sala le pareció deliciosa. No quería seguir pensando en la pesadilla. Ya no debía tener tanta fiebre, le dolía la ceja apenas, como un recuerdo. Ahora volvía a ganarlo el sueño,  a tirarlo despacio hacia abajo, quizá pudiera descansar de veras, sin las malditas pesadillas, sin embargo, el miedo a revivir esas oscuras situaciones fue más fuerte que él y prefirío mantenerse despierto hasta donde el cuerpo le permita.";
  textos[16] = "Lo envolvía una oscuridad absoluta. Constantemente oía gritos roncos que rebotaban en las paredes. Era él que gritaba en las tinieblas. Vió abrirse la doble puerta, los sacerdotes se le acercaron mirandolo con desprecio. Se sintió alzado, siempre boca arriba, y tironenado sentía como llegaba el final.  Cada vez que cerraba los ojos veía formarse esas imagenes instantaneamente, con una última esperanza apretó los párpados, gimiendo por despertar. Durante un segundo creyó que lo lograría, pero olía la muerte y cuando abrió los ojos vió la figura ensangrentada del sacrificador que llegaba hacia él con un cuchillo de piedra en la mano. El sacrificador resultó ser no más que él mismo, producto de sus alucinaciones por la sedación terminó con su vida, sabiendo que nunca iba a despertar.";
}


function inicializarRectangulos(rectangulosIzquierda, rectangulosDerecha, rectangulosCentro, rectanguloEspecial, rectangulosCuentos){
  //----------------------------//
  rectangulosIzquierda[3] = true;
  rectangulosIzquierda[5] = true;
  rectangulosIzquierda[8] = true;
  rectangulosIzquierda[10] = true;
  rectangulosIzquierda[12] = true; 
  rectangulosIzquierda[15] = true;
  //----------------------------//
  rectangulosCentro[1] = true;
  rectangulosCentro[13] = true; 
  //----------------------------//
  rectangulosDerecha[3] = true;
  rectangulosDerecha[5] = true;
  rectangulosDerecha[8] = true;
  rectangulosDerecha[10] = true;
  rectangulosDerecha[12] = true;  
  rectangulosDerecha[15] = true; 
  //----------------------------//  
  rectanguloEspecial[1] = true;
  rectanguloEspecial[0] = true;
  //----------------------------//  
  rectangulosCuentos[2] = true;
  rectangulosCuentos[4] = true;
  rectangulosCuentos[6] = true;
  rectangulosCuentos[7] = true;
  rectangulosCuentos[9] = true;
  rectangulosCuentos[11] = true;
  rectangulosCuentos[14] = true;
  rectangulosCuentos[16] = true;  
}
function dibujarRectangulo(x, y, ancho, alto){
  fill(219,182,127);
  stroke(255);
  rect(x, y, ancho, alto);
}
function configurarTextos(miFuenteDos){
  textAlign(CENTER, CENTER);
  fill(0);
  noStroke();
  textSize(15);
  textFont(miFuenteDos);
}
function configurarTitulos(miFuente){
  textAlign(CENTER, CENTER);
  fill(219,182,127);
  stroke(255);
  strokeWeight(2);
  textSize(60);
  textFont(miFuente);
}
function configurarCreditos(miFuente){
  textAlign(CENTER, CENTER);
  fill(219,182,127);
  stroke(255);
  strokeWeight(2);
  textSize(40);
  textFont(miFuente);
}
function configurarCuentos(miFuenteDos){
  textAlign(LEFT, LEFT);
  fill(0);
  noStroke();
  textSize(10);
  textFont(miFuenteDos);
}
function detectarRectanguloPresionado(){
  if(mouseX > 240 && mouseX < 400 && mouseY > 300 && mouseY < 360){
    //return rectanguloPresionado;
    return "Centro";
  }
  else if(mouseX > 0 && mouseX < 160 && mouseY > 420 && mouseY < 480){
    //return rectanguloPresionado;
    return "Especial";
  }
  else if(mouseX > 80 && mouseX < 240 && mouseY > 300 && mouseY < 360){
    //return rectanguloPresionado;
    return "Izquierda";
  }
  else if(mouseX > 400 && mouseX < 560 && mouseY > 300 && mouseY < 360){
    //return rectanguloPresionado;
    return "Derecha";
  }
  else{
    return "Ninguno";
  }
}
function cambiarEscena(nuevaEscena){
  escenaActual = nuevaEscena;
  rectanguloPresionado = "Ninguno";
}
function ejecutarRectangulos(){
  if(rectangulosIzquierda[escenaActual] === true){
    dibujarRectangulo(xIzq, yIzq, anchoIzq, altoIzq);
  }
  if(rectangulosDerecha[escenaActual] === true){
    dibujarRectangulo(xDer, yDer, anchoDer, altoDer);
  }
  if(rectangulosCentro[escenaActual] === true){
    dibujarRectangulo(xCen, yCen, anchoCen, altoCen);
  }
  if(rectanguloEspecial[escenaActual] === true){
    dibujarRectangulo(xEsp, yEsp, anchoEsp, altoEsp);
  }
  if(rectangulosCuentos[escenaActual] === true){
    dibujarRectangulo(xCuento - 10, yCuento - 20, anchoCuento + 20, altoCuento);
  }
}
function ejecutarBotones(){
  
  if(escenaActual === 0){
    if(rectanguloPresionado === "Especial"){
      cambiarEscena(1);
    }
  }
  
  else if(escenaActual === 1){
    if(rectanguloPresionado === "Especial"){
      cambiarEscena(0);
    }
    if(rectanguloPresionado === "Centro"){
      cambiarEscena(2);
      sonido.play();
    }
  }
  
  else if(escenaActual === 2){
    cambiarEscena(3);
  }
  else if(escenaActual === 3){
    if(rectanguloPresionado === "Izquierda" || rectanguloPresionado === "Derecha"){ //Las dos barritas significan or)
      cambiarEscena(4);
    }  
  }
  else if(escenaActual === 4){
    cambiarEscena(5);
  }
  else if(escenaActual === 5){
    if(rectanguloPresionado === "Izquierda"){
      cambiarEscena(6);
    }
    if(rectanguloPresionado === "Derecha"){
      cambiarEscena(7);
    }
  }  
  else if(escenaActual === 6){
    cambiarEscena(1);  
    detenerSonido();
  }
  else if(escenaActual === 7){
    cambiarEscena(8);  
  }
  else if(escenaActual === 8){
    if(rectanguloPresionado === "Izquierda" || rectanguloPresionado === "Derecha"){
      cambiarEscena(9);
    }  
  }  
  else if(escenaActual === 9){
    cambiarEscena(10);  
  }  
  else if(escenaActual === 10){
    if(rectanguloPresionado === "Izquierda"){
      cambiarEscena(6);
    }
    if(rectanguloPresionado === "Derecha"){
      cambiarEscena(11);
    }
  }   
  else if(escenaActual === 11){
    cambiarEscena(12);  
  }  
  else if(escenaActual === 12){
    if(rectanguloPresionado === "Izquierda"){
      cambiarEscena(13);
    }
    if(rectanguloPresionado === "Derecha"){
      cambiarEscena(14);
    }
  }     
  else if(escenaActual === 13){
    cambiarEscena(12);  
  }  
  else if(escenaActual === 14){
    cambiarEscena(15);  
  }       
  else if(escenaActual === 15){
    if(rectanguloPresionado === "Izquierda"){
      cambiarEscena(1);
      detenerSonido();
    }
    if(rectanguloPresionado === "Derecha"){
      cambiarEscena(16);
    }
  }     
  else if(escenaActual === 16){
    cambiarEscena(1);  
    detenerSonido();
  }    
}
function ejecutarTextos(){
  if(escenaActual === 1){
    configurarTextos(miFuenteDos);
    text('Empezar', xCen, yCen, anchoCen, altoCen);
    text('Créditos', xEsp, yEsp, anchoEsp, altoEsp);
    configurarTitulos(miFuente);
    text('LA NOCHE \n BOCA ARRIBA', xTit, yTit, anchoTit, altoTit);    
  }
  else if(escenaActual === 0){
    configurarTextos(miFuenteDos);
    text('Volver', xEsp, yEsp, anchoEsp, altoEsp);
    configurarCreditos(miFuente);
    text('Julio Cortazar\nALUMNAS: Floch Micaela, Fernandez Maria Pilar. \nCOMISIÓN 1: Jose Luis Bugiolachi, Fernando Cardos', xTit2, yTit2, anchoTit2, altoTit2); 
  }
  else if(escenaActual === 2){
    configurarCuentos(miFuenteDos);
    text(textos[2], xCuento, yCuento, anchoCuento, altoCuento);
  }
  else if(escenaActual === 3){
    configurarTextos(miFuenteDos);
    text('Esquivar a la mujer y caerse', xIzq, yIzq, anchoIzq, altoIzq);
    text('Atropellar a la mujer', xDer, yDer, anchoDer, altoDer);
  }
  else if(escenaActual === 4){
    configurarCuentos(miFuenteDos);
    text(textos[4] , xCuento, yCuento, anchoCuento, altoCuento);
  }
  else if(escenaActual === 5){
    configurarTextos(miFuenteDos);
    text('Resistirse a la sedación', xIzq, yIzq, anchoIzq, altoIzq);
    text('Aceptar la sedación', xDer, yDer, anchoDer, altoDer);
  }
  else if(escenaActual === 6){
    configurarCuentos(miFuenteDos);
    text(textos[6] , xCuento, yCuento, anchoCuento, altoCuento);
  }
  else if(escenaActual === 7){
    configurarCuentos(miFuenteDos);
    text(textos [7] , xCuento, yCuento, anchoCuento, altoCuento);
  }
  else if(escenaActual === 8){
    configurarTextos(miFuenteDos);
    text('Correr por la jungla sin rumbo', xIzq, yIzq, anchoIzq, altoIzq);
    text('Buscar un escondite temporal', xDer, yDer, anchoDer, altoDer);
  }
  else if(escenaActual === 9){
    configurarCuentos(miFuenteDos);
    text(textos [9] , xCuento, yCuento, anchoCuento, altoCuento);
  }
  else if(escenaActual === 10){
    configurarTextos(miFuenteDos);
    text('Intentar no dormirse de nuevo', xIzq, yIzq, anchoIzq, altoIzq);
    text('Quedarse inmóvil y aceptar el dolor', xDer, yDer, anchoDer, altoDer);
  }
  else if(escenaActual === 11 ){
    configurarCuentos(miFuenteDos);
    text(textos [11] , xCuento, yCuento, anchoCuento, altoCuento);
  }
  else if(escenaActual === 12){
    configurarTextos(miFuenteDos);
    text('Luchar contra el guerrero', xIzq, yIzq, anchoIzq, altoIzq);
    text('Subir a un arbol para esconderse', xDer, yDer, anchoDer, altoDer);
  }
  else if(escenaActual === 13 ){
    configurarTextos(miFuenteDos);
    text('ACA VA EL JUEGO' , xCen, yCen, anchoCen, altoCen);
  }
  else if(escenaActual === 14){
    configurarCuentos(miFuenteDos);
    text(textos [14], xCuento, yCuento, anchoCuento, altoCuento);
  }
  else if(escenaActual === 15){
    configurarTextos(miFuenteDos);
    text('Completar el tratamiento médico', xIzq, yIzq, anchoIzq, altoIzq);
    text('Negarse a recibir más ayuda médica', xDer, yDer, anchoDer, altoDer);
  }
  else if(escenaActual === 16){
    configurarCuentos(miFuenteDos);
    text(textos [16], xCuento, yCuento, anchoCuento, altoCuento);
  }
}
function resetear(){
  if (key === 'r' || key === 'R') { // Verifica si se presionó 'R' o 'r'
    escenaActual = 1
    console.log("reset");
    detenerSonido();
  }
}

function detenerSonido(){
  if (sonido.isPlaying()){
    sonido.stop();
  }
}
