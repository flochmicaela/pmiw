class Enemigo extends Personaje{
  constructor(posX, posY, imagen, velocidad){   
    super(posX, posY, imagen, velocidad)
    this.lanzas = [];
    this.direccion = true;
    this.frecuenciaAtaque = 0;
    this.frecuenciaMovimiento = 0;  
  }
  
  obtenerLanzas(){
    return this.lanzas;
  }

  actualizar(){ //Entra 30 veces por segundo
    this.frecuenciaAtaque ++;
    this.frecuenciaMovimiento ++;
    
    if ( this.frecuenciaAtaque >= 10 ){
      this.frecuenciaAtaque = 0;
      this.tirarLanza();
    }
    
    if ( this.frecuenciaMovimiento == 2){
      this.frecuenciaMovimiento = 0;
      this.mover();
    }
  }
  
  tirarLanza(){
    let nuevaLanza = new Lanza(this.posX, this.posY + this.diam /2, 8);
    this.lanzas.push(nuevaLanza);
  }
  
  dibujar(){ 
    super.dibujar();
    console.log(this.posX);
    for (let i=0; i<this.lanzas.length; i++){
      this.lanzas[i].dibujar();  
    }
    
  }
  
  teclaApretada(keyCode){
    if (keyCode == ENTER){
      this.tirarLanza();
    }
  }

  mover(){
    if ( this.direccion == true ){
      this.posX += this.velocidad;
      if (this.posX >= width - this.diam){
        
        if(this.velocidad < 50){
          this.velocidad = this.velocidad + 2;
        }  
        this.direccion = false
      }
    }
    else {
      this.posX -= this.velocidad;
      if (this.posX <= 0){
        if(this.velocidad < 50){
          this.velocidad = this.velocidad + 2;
        }
        this.direccion = true
      }
    }      
  }
 }
