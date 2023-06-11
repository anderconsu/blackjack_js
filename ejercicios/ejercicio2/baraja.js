import { fileURLToPath } from "url";
import Carta from "../ejercicio1/carta.js";

class Baraja {
  constructor() {
    this.cartas = [];
    const palos = ["corazones", "diamantes", "tréboles", "picas"];
    const valores = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    /*
     * TODO: Crear crear una carta de cada palo y valor y guardarla en la baraja
     */
    for (let palo of palos) {
      for (let valor of valores) {
        this.cartas.push(new Carta(palo, valor));
      }
    }
  }

  mezclar() {
    for (var i = this.cartas.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.cartas[i];
      this.cartas[i] = this.cartas[j];
      this.cartas[j] = temp;
    }
    /*
     * TODO: Mezclar las cartas de la baraja
     * SUGERENCIA DE LECTURA: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
     * SUGERENCIA DE LECTURA: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
     * No devuelve nada
     */
  }

  sacarCarta() {
    /*
     * TODO: Sacar una carta de la baraja
     * se debe sacar la última carta de la baraja y devolverla
     */
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
