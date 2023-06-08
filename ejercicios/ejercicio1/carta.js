import { fileURLToPath } from "url";

class Carta {
    constructor(palo, valor) {
      this.palo = palo;
      this.valor = valor;
    }
  
    getValor() {
      if (this.valor === "A") {
        return 11;
      } else if (["J", "Q", "K"].includes(this.valor)) {
        return 10;
      } else {
        return parseInt(this.valor);
      }
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