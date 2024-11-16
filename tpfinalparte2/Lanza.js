class Lanza{
  
  constructor(posX, posY, imagen){
    this.posX = posX;
    this.posY =posY;
    this.imagen = imagenes[imagen];
    this.diam = 40;
  }
  
  dibujar(){ 
    image(this.imagen, this.posX, this.posY, this.diam, this.diam);
    this.mover();
    
  }
  
  mover(){  
    this.posY +=5;
  }
  
  eliminar(){ //sale de la pantalla
    this.posX = 1000;
  }
  
  obtenerPosicionX(){
    return this.posX;
  }
  
  obtenerPosicionY(){
    return this.posY;
  }
  
}
