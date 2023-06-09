import { fileURLToPath } from "url";
import Baraja from "../ejercicio2/baraja.js";

class Mano {
    constructor() {
        this.cartas = [];
        /*
        * TODO: Inicializar la propiedad cartas como un array vacío
        */
    }
  
    agregarCarta(carta) {
        /*
        * TODO: Agregar una carta a la mano
        */
       this.cartas.push(carta)
    }
  
    getValor() {
      let valor = 0;
      let tieneAs = false;

      /*
      * TODO: Calcular el valor de la suma de las cartas
      * Si la mano tiene un As y la suma es mayor que 21, restar 10 a la suma
      */
        for (let carta of this.cartas){
            valor += carta.getValor();
        }
        if(this.cartas.includes("A")){tieneAs = true}
        if (valor > 21) {
            tieneAs = true;
            valor -= 10;
        }
      
  
      return valor;
    }
    showMano(){
        console.log("=====================")
        console.log("Cartas en la mano : ")
        for (let carta of this.cartas){
            console.log(carta.palo + " " + carta.valor);
        }
        console.log("=====================")
    }
  }

const baraja = new Baraja();
const mano = new Mano();

// mezcla las cartas en la baraja
baraja.mezclar();

// saca dos cartas de la baraja y las agrega a la mano
const carta1 = baraja.sacarCarta();
mano.agregarCarta(carta1);

const carta2 = baraja.sacarCarta();
mano.agregarCarta(carta2);

// calcula el valor de la mano
const valor = mano.getValor();

mano.showMano()
console.log(`Valor de la mano: ${valor}`);

  export default Mano;

    if (process.argv[1] === fileURLToPath(import.meta.url)) {
        let baraja = new Baraja();
        let mano = new Mano();
        baraja.mezclar();
        for (let i = 0; i < 2; i++) {
            let carta = baraja.sacarCarta();
            mano.agregarCarta(carta);
        }
        console.log(mano.cartas);
    }
  