class Personaje{ // pestaña para herencia, reune las caracteristicas compartidas de los personajes (enemigo y jugador)
  constructor(posX, posY, imagen, velocidad){
    this.posXInicial = posX;
    this.posYInicial = posY;
    this.velocidadInicial = velocidad
    this.posX = this.posXInicial;
    this.posY = this.posYInicial;
    this.velocidad = this.velocidadInicial;
    this.imagen = imagenes[imagen]
    this.diam = 100;
  }
  
  obtenerPosicionX(){
    return this.posX;
  }
  
  obtenerPosicionY(){
    return this.posY;
  }
  
  dibujar(){
    image(this.imagen, this.posX, this.posY, this.diam, this.diam);
  }
  
  reiniciar(){
    this.posX = this.posXInicial;
    this.posY = this.posYInicial;
    this.velocidad = this.velocidadInicial;
  }

}
