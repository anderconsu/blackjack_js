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
      
    }
  
    mostrarManos(oculto=false) {
        /*
        * TODO: Mostrar en pantalla las cartas del jugador y del crupier. 
        * Si oculto es true, ocultar la segunda carta del crupier
        */
    }
  
    jugar = async () =>{
        /*
        * TODO: mientras el jugador no se haya plantado:
        * - Mostrar las cartas del jugador y del crupier
        * - Preguntar al jugador si quiere pedir otra carta o plantarse
        * - Si el jugador pide otra carta, repartir una carta al jugador
        * - Si el jugador se planta, cambiar la propiedad plantado a true
        */
        while (false) {
            /*
            * TODO: Mostrar las cartas del jugador y del crupier
            */
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
        }
        /*
        * TODO: Mientras el crupier no se haya plantado:
        * - Crear una etratégia para el crupier
        * - Si el crupier pide otra carta, repartir una carta al crupier
        * - Si el crupier se planta, cambiar la propiedad plantado a true
        */
        while (false) {
            
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
        
    }
  }

    export default Juego;