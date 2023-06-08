import { fileURLToPath } from "url";

class Carta {
    constructor(palo, valor) {
        // TODO: Guardar palo y valor en propiedades
    }
  
    getValor() {
        /* 
        * TODO: Devolver el valor de la carta
        * 2-10 valen su valor
        * J, Q, K valen 10
        * A vale 11 
        */
       return 0;
    }
  }

export default Carta;



if (process.argv[1] === fileURLToPath(import.meta.url)) {
    let carta = new Carta("corazones", "A");
    console.log(carta.getValor());
    carta = new Carta("corazones", "J");
    console.log(carta.getValor());
    carta = new Carta("corazones", "2");
    console.log(carta.getValor());
}