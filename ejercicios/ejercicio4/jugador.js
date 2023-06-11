import { fileURLToPath } from "url";
import Mano from "../ejercicio3/mano.js";
import Baraja from "../ejercicio2/baraja.js";

class Jugador {
  constructor() {
    /*
     * TODO: Inicializar la propiedad mano como un objeto de la clase Mano y la propiedad plantado a false
     */
    this.mano = new Mano();
    this.plantado = false;
  }

  agregarCarta(carta) {
    /*
     * TODO: Agregar una carta a la mano
     * Si el valor de la mano es mayor que 21, plantarse
     */
    this.mano.agregarCarta(carta);
    if (this.mano.getValor() > 21) {
      this.plantarse();
    }
  }
  plantarse() {
    /*
     * TODO: Cambiar la propiedad plantado a true
     */
    this.plantado = true;
  }

  mostrarMano(oculto = false) {
    /*
     * TODO: Devolver un string con las cartas de la mano
     * Si oculto es true, mostrar sólo la primera carta, el resto mostrarlas como "?"
     * Ejemplo: "A de corazones, ?"
     * Si oculto es false, mostrar todas las cartas
     * Ejemplo: "A de corazones, 2 de corazones"
     */
    if (this.mano.cartas) {
      if (oculto === true) {
        return `${this.mano.cartas[0].valor} de ${this.mano.cartas[0].palo}, ?`;
      } else {
        let str = "";
        for (let carta of this.mano.cartas) {
          str += `${carta.valor} de ${carta.palo}, `;
        }
        return str + "Total: " + this.mano.getValor();
      }
    } else {
      return " no tiene cartas";
    }
  }
}

export default Jugador;

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  let baraja = new Baraja();
  let jugador = new Jugador();
  baraja.mezclar();
  for (let i = 0; i < 2; i++) {
    let carta = baraja.sacarCarta();
    jugador.agregarCarta(carta);
  }
  console.log(jugador.mostrarMano());

  let crupier = new Jugador();
  for (let i = 0; i < 2; i++) {
    let carta = baraja.sacarCarta();
    crupier.agregarCarta(carta);
  }
  console.log(crupier.mostrarMano(true));
}
