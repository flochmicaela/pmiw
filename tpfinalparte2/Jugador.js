class Jugador extends Personaje{
  
  constructor(posX, posY, imagen, velocidad){    
    super(posX, posY, imagen, velocidad)
    this.vidaInicial = 3;
    this.vida = this.vidaInicial;
  }
  
  teclaApretada(keyCode){
    if(keyCode == 65 && this.posX > 0){
      this.moverIzq();
    }else if (keyCode == 68 && this.posX < width-50){
      this.moverDer();
    }else if (keyCode == 87 && this.posY > 0){
      this.moverArriba();
    }else if (keyCode == 83 && this.posY < height-50){
      this.moverAbajo();
    }
  }
  
  moverIzq(){
    this.posX -= this.velocidad
  }
  
  moverDer(){
    this.posX += this.velocidad
  }
  
  moverArriba(){
    this.posY -= this.velocidad
  }
  
  moverAbajo(){
    this.posY += this.velocidad
  }
  
  restarVida(){
    if( this.vida > 1 ){ 
      this.vida --;
      return false;
    }
    else{
      return true;
    }
  }
  
  obtenerVida(){
    return this.vida;
  }
  
  reiniciar(){
    super.reiniciar()
    this.vida = this.vidaInicial;
  }
  
}
