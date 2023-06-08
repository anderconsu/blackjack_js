import prompt from "prompts";

import Baraja from "../ejercicio2/baraja.js";
import Jugador from "../ejercicio4/jugador.js";

class Juego {
    constructor() {
        /*
        * TODO:
        * - Inicializar la propiedad baraja como un objeto de la clase Baraja
        * - Mezclar la baraja
        * - Inicializar la propiedad jugador como un objeto de la clase Jugador
        * - Inicializar la propiedad crupier como un objeto de la clase Jugador
        * - Repartir dos cartas al jugador
        * - Repartir dos cartas al crupier
        */
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
    mostrarManos(oculto=false) {
        console.log(`El jugador tiene: ${this.jugador.mostrarMano()} (total: ${this.jugador.mano.getValor()})`);
        console.log(`El crupier tiene: ${this.crupier.mostrarMano(oculto)} (total: ${this.crupier.mano.getValor()})`);
    }
  
    jugar = async () =>{
        while (!this.jugador.plantado) {
            this.mostrarManos();
            const question ={
                type: "text",
                name: "opcion",
                message: "¿Quieres pedir otra carta (s) o plantarte (n)?"
            }
            
            const response = await prompt(question);
            const opcion = response.opcion;
            if (opcion === "s") {
                this.jugador.agregarCarta(this.baraja.sacarCarta());
            }
            else{
                this.jugador.plantarse();
            }
        }
        while (!this.crupier.plantado) {
  
            if (this.crupier.mano.getValor() < 17 || (this.crupier.mano.getValor() < this.jugador.mano.getValor()) && this.jugador.mano.getValor() <= 21) {
            this.crupier.agregarCarta(this.baraja.sacarCarta());
            }
            else{
            this.crupier.plantarse();
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