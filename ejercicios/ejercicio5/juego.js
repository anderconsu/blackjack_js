import prompt from "prompts";

import Baraja from "../ejercicio2/baraja.js";
import Jugador from "../ejercicio4/jugador.js";

class Juego {
    constructor() {
      this.baraja = new Baraja();
      this.baraja.mezclar();
  
      this.jugador = new Jugador();
      this.crupier = new Jugador();
  
      this.jugador.agregarCarta(this.baraja.sacarCarta());
      this.crupier.agregarCarta(this.baraja.sacarCarta());
      this.jugador.agregarCarta(this.baraja.sacarCarta());
      this.crupier.agregarCarta(this.baraja.sacarCarta());
    }
  
    juegoTerminado() {
      return this.jugador.mano.getValor() > 21 || this.crupier.mano.getValor() > 21
        || this.jugador.mano.cartas.length === 5 || this.crupier.mano.cartas.length === 5;
    }
  
    jugar = async () =>{
      while (!this.juegoTerminado()) {
        console.log(`El jugador tiene: ${this.jugador.mostrarMano()} (total: ${this.jugador.mano.getValor()})`);
        console.log(`El crupier tiene: ${this.crupier.mostrarMano(true)} (total: ?)`);
        const question ={
          type: "text",
          name: "opcion",
          message: "¿Quieres pedir otra carta (s) o plantarte (n)?"
        }
        if(!this.jugador.plantado){
            const response = await prompt(question);
            const opcion = response.opcion;
            if (opcion === "s") {
              this.jugador.agregarCarta(this.baraja.sacarCarta());
            }
            else{
              this.jugador.plantarse();
            }
        }
  
        if (this.crupier.mano.getValor() < 17 || (this.crupier.mano.getValor() < this.jugador.mano.getValor()) && this.jugador.mano.getValor() <= 21) {
          this.crupier.agregarCarta(this.baraja.sacarCarta());
        }
        else{
          this.crupier.plantarse();
        }
        if (this.jugador.plantado && this.crupier.plantado) {
          break;
        }
        
  
      }
  
      console.log(`El jugador tiene: ${this.jugador.mostrarMano()} (total: ${this.jugador.mano.getValor()})`);
      console.log(`El crupier tiene: ${this.crupier.mostrarMano()} (total: ${this.crupier.mano.getValor()})`);
  
      if (this.jugador.mano.getValor() > 21) {
        console.log("Has perdido");
      } else if (this.crupier.mano.getValor() > 21) {
        console.log("Has ganado");
      } else if (this.jugador.mano.getValor() > this.crupier.mano.getValor()) {
        console.log("Has ganado");
      } else if (this.crupier.mano.getValor() > this.jugador.mano.getValor()) {
        console.log("Has perdido");
      } else {
        console.log("Empate");
      }
    }
  }

    export default Juego;