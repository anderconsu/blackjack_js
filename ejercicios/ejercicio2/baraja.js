import { fileURLToPath } from "url";
import Carta from "../ejercicio1/carta.js";

class Baraja {
    constructor() {
      this.cartas = [];
  
      const palos = ["corazones", "diamantes", "tréboles", "picas"];
      const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
      for (let palo of palos) {
        for (let valor of valores) {
          this.cartas.push(new Carta(palo, valor));
        }
      }
    }
  
    mezclar() {
      for (let i = this.cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cartas[i], this.cartas[j]] = [this.cartas[j], this.cartas[i]];
      }
    }
  
    sacarCarta() {
      return this.cartas.pop();
    }
  }

    export default Baraja;
  
    if (process.argv[1] === fileURLToPath(import.meta.url)) {
        let baraja = new Baraja();
        baraja.mezclar();
        console.log(baraja.cartas);
        console.log(baraja.sacarCarta());
    }