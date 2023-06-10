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
        this.baraja.mezclar()
        this.jugador = new Jugador();
        this.crupier = new Jugador();
        this.jugador.agregarCarta(this.baraja.sacarCarta())
        this.jugador.agregarCarta(this.baraja.sacarCarta())
        this.crupier.agregarCarta(this.baraja.sacarCarta())
        this.crupier.agregarCarta(this.baraja.sacarCarta())
      
    }
  
    mostrarManos(oculto=false) {
        /*
        * TODO: Mostrar en pantalla las cartas del jugador y del crupier. 
        * Si oculto es true, ocultar la segunda carta del crupier
        */
       console.log(`Mano del Jugador: ${this.jugador.mostrarMano(false)}`)
       console.log(`Mano del Crupier: ${this.crupier.mostrarMano(oculto)}`)
    }
  
    jugar = async () =>{
        /*
        * TODO: mientras el jugador no se haya plantado:
        * - Mostrar las cartas del jugador y del crupier
        * - Preguntar al jugador si quiere pedir otra carta o plantarse
        * - Si el jugador pide otra carta, repartir una carta al jugador
        * - Si el jugador se planta, cambiar la propiedad plantado a true
        */
       let jugarAgain = true
        while (this.jugador.plantado === false) {
            /*
            * TODO: Mostrar las cartas del jugador y del crupier
            */
            this.mostrarManos(true)
            const question ={
                type: "text",
                name: "opcion",
                message: "¿Quieres pedir otra carta (s) o plantarte (n)?"
            }
            
            const response = await prompt(question);
            const opcion = response.opcion;
            
            /* 
            * TODO: Si el jugador pide otra carta, repartir una carta al jugador
            * Si el jugador se planta, cambiar la propiedad plantado a true
            */
           if(opcion === "s"){
               this.jugador.agregarCarta(this.baraja.sacarCarta())
               if(this.jugador.mano.getValor() > 21){
                   this.jugador.plantado = true
               }
               
           }else if(opcion === "n"){
               this.jugador.plantado = true
               
           }else{
               console.log("Opcion invalida")
           }
        }
        /*
        * TODO: Mientras el crupier no se haya plantado:
        * - Crear una etratégia para el crupier
        * - Si el crupier pide otra carta, repartir una carta al crupier
        * - Si el crupier se planta, cambiar la propiedad plantado a true
        */
        while (this.crupier.plantado === false) {
        if (this.jugador.mano.getValor() > 21){
            this.crupier.plantado = true
        }else{
            if(this.jugador.mano.getValor() > this.crupier.mano.getValor()){
                this.crupier.agregarCarta(this.baraja.sacarCarta())
            }else{
                this.crupier.plantado = true
            }
         }
        }

        /*
        * TODO: Mostrar la mano final del jugador y del crupier
        */
        /*
        * TODO: Mostrar el resultado del juego
        * - Si el jugador se ha pasado de 21, ha perdido
        * - Si el crupier se ha pasado de 21, ha ganado
        * - Si el jugador tiene más puntos que el crupier, ha ganado
        * - Si el crupier tiene más puntos que el jugador, ha perdido
        * - Si el jugador y el crupier tienen los mismos puntos, ha empatado
        * - ...
        */
       this.mostrarManos(false)
       if(this.crupier.mano.getValor() > 21){
           console.log("Has ganado")
       }else if(this.jugador.mano.getValor() > 21){
           console.log("El crupier ha ganado")
       }else if(this.crupier.mano.getValor() > this.jugador.mano.getValor()){
           console.log("El crupier ha ganado")
       }else if(this.jugador.mano.getValor() > this.crupier.mano.getValor()){
           console.log("Has ganado")
       }else{
           console.log("Ha empatado")
       }
        return;
    }  
        
    }
const juego = new Juego();
await juego.jugar();

    export default Juego;