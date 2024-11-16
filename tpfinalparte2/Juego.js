class Juego{ 
  constructor(){
    this.crearEnemigo();
    this.crearPersonaje();
    this.frecuencia = 0;
    this.escenaActual = 1;
    this.botones = [[0, 20, 140, 420, 480], [3, 220, 400, 280, 360], [2, 500, 620, 420, 480]]; //arreglo con las coordenadas de los botones
    this.perdio = false;
    this.gano = false;
    this.posYVida = 0;
    this.posXVida = [];
    this.corazon = imagenes[9];
    this.sonido = false;
    for (let i=0; i < 3; i++){  
      this.posXVida[i] = 50*i;
    }
  }
  
  resetear(){
    this.personaje.reiniciar();
    this.enemigo.reiniciar();
  }
  
  dibujar(){ //una vez por frame, o sea 60 veces por segundo
    this.enemigo.dibujar();
    this.personaje.dibujar();    
    this.frecuencia ++;
    if ( this.frecuencia == 2){ //Por cuanto dividis los frames
      this.frecuencia = 0;
      objJuego.enemigo.actualizar();
    }    
  } 
  
  dibujarCorazones(){
    for (let i=0; i < this.personaje.obtenerVida(); i++){ //Va a dibujar tantos corazones como vida tenga el personaje
      image(this.corazon, this.posXVida[i], this.posYVida, 50, 50);
    }
  }
  
  colisionLanza(lanza){
    if( lanza.obtenerPosicionY() <= 480 && dist(lanza.obtenerPosicionX(), lanza.obtenerPosicionY(), this.personaje.obtenerPosicionX(), this.personaje.obtenerPosicionY() ) < 50){
      lanza.eliminar();
      sonidos[3].play();
      if (this.personaje.restarVida() == true){
        this.cambiarEscena(5);       
        this.detenerSonido();
        sonidos[1].play();
      }
    }
  }
  
  chequeos(){
    image(imagenes[this.obtenerEscena()], 0, 0);
    if(objJuego.obtenerEscena() === 3){
      if(this.sonido == false){
        this.sonido = true
        sonidos[0].loop = true;
        sonidos[0].play();
      }
      this.dibujarCorazones();
      this.dibujar();
      let lanzas = this.enemigo.obtenerLanzas();    
      for (let i=0; i < lanzas.length; i++){       
        this.colisionLanza(lanzas[i]);
      }
    }
  }
  
  crearEnemigo(){
    this.enemigo = new Enemigo(width/2, height - 490, 7, 40);
  }
  
  crearPersonaje(){
    this.personaje = new Jugador(width/2 - 50, height-100, 6, 20);   
  }
  
  teclaApretada(keyCode){
    if(keyCode === ENTER){
      if( dist(this.enemigo.obtenerPosicionX(), this.enemigo.obtenerPosicionY(), this.personaje.obtenerPosicionX(), this.personaje.obtenerPosicionY() ) < 50 && (this.gano == false) ){
        this.gano = true;
        this.cambiarEscena(4);
        this.detenerSonido();
        sonidos[2].play();
        
      }
    }
    else if(keyCode === 82){
      this.cambiarEscena(1);
      this.detenerSonido();
      this.resetear();
    }
    else{
      this.personaje.teclaApretada(keyCode);
    }
  }
  
  mouseApretado(){
    this.ejecutarEscenas(this.escenaActual);
  }
  
  obtenerEscena(){
    return this.escenaActual;
  }
  
  ejecutarEscenas(escenaActual){
    
    if(escenaActual === 1){
      for(let i=0; i < 3 ; i++){ 
        if ( mouseX > this.botones[i][1] && mouseX < this.botones[i][2] && mouseY > this.botones[i][3] && mouseY < this.botones[i][4]){
          this.cambiarEscena(this.botones[i][0]);
        }
      }
    }
    else if(escenaActual === 0 || escenaActual === 2){
      if(dist(mouseX, mouseY, 80, 450) < 50){
        this.cambiarEscena(1);
      }
    }
  }
    
  cambiarEscena(nuevaEscena){
    this.escenaActual = nuevaEscena;
  }
  
  detenerSonido(){
    if (sonidos[0].isPlaying()){
      this.sonido = false;
      sonidos[0].stop();
    }
  }
}
