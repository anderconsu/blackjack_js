# blackjack_js

## Introducción

En busca de un experto en desarrollo de software para blackjack

Estamos buscando un desarrollador de software altamente capacitado para unirse a nuestra compañía de renombre en la industria de los juegos de azar y específicamente en el proyecto de blackjack. El candidato ideal deberá contar con conocimientos sólidos en la programación orientada a objetos y en el uso de la librería 'prompts'.

Como parte de sus responsabilidades, el candidato se encargará de crear una serie de ejercicios para mejorar las habilidades en el juego de blackjack. El juego debe estar hecho en ES6, definido como módulo en el package.json, y requerir la instalación y uso de la librería 'prompts' utilizando npm.

Estamos comprometidos a brindar todo el apoyo y recursos necesarios para asegurar el éxito del proyecto. En este sentido, esperamos que el candidato sea capaz de trabajar en equipo de manera eficiente y creativa.

Si estás interesado en formar parte de nuestro equipo de expertos en la industria de los juegos de azar, y crees que cuentas con los conocimientos y habilidades necesarias para llevar a cabo este proyecto, nos encantaría conocerte. ¡Postula ya y únete a nosotros en un emocionante proyecto de desarrollo de juegos!

---

## Ejercicio 1

Este ejercicio consiste en la creación de una clase llamada `Carta`.  Esta clase debe recibir dos argumentos `palo` y `valor` a través del constructor y debe tener un método llamado `getValor()` que devuelva el valor de la carta según las reglas del juego.

La propiedad `palo` determina el tipo de palo al que pertenece la carta (espadas, corazones, diamantes, tréboles, entre otros). Por otro lado, la propiedad `valor` indica el número o letra que está asignado a la carta.

El método `getValor()` debe retornar el valor numérico de la carta según las siguientes reglas:
- Las cartas del 2 al 10 valen su propio número
- Las cartas J, Q, K valen 10 puntos cada una
- La carta A vale 11 puntos

A continuación, se muestra un ejemplo de código que utiliza la clase `Carta`:

```js
const carta1 = new Carta('espadas', 4);
const carta2 = new Carta('corazones', 'K');
const carta3 = new Carta('diamantes', 'A');

console.log(carta1.getValor()); // Output: 4
console.log(carta2.getValor()); // Output: 10
console.log(carta3.getValor()); // Output: 11
```

En este ejemplo, se crean tres cartas (`carta1`, `carta2` y `carta3`) utilizando la clase `Carta`. Después, se llama al método `getValor()` de cada una para obtener su valor numérico correspondiente.

---

## Ejercicio 2

Este ejercicio consiste en la creación de una clase llamada `Baraja` que represente una baraja de cartas de póker. La clase debe tener un constructor que inicie la baraja con todas las cartas de la baraja, y además, debe tener tres métodos: `mezclar`, `sacarCarta` y `nuevaBaraja`.

El constructor debe inicializar la baraja con las 52 cartas, que corresponden a los palos "corazones", "diamantes", "tréboles" y "picas", y los valores "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q" y "K". En este constructor también se debe crear un arreglo llamado `cartas` que va a contener todas las cartas de la baraja.

El método `mezclar` debe mezclar las cartas de la baraja de forma aleatoria utilizando el algoritmo de Fisher-Yates, o cualquier otro algoritmo de mezcla que se considere apropiado. Este método no necesita retornar nada, simplemente debe modificar el arreglo `cartas`.

El método `sacarCarta` debe sacar una carta de la baraja. Para hacerlo, se debe tomar la última carta del arreglo `cartas`, quitarla de la baraja y retornarla.

A continuación se muestra un ejemplo del uso de la clase `Baraja`:

```js

const baraja = new Baraja();

// mezcla las cartas en la baraja
baraja.mezclar();

// saca una carta de la baraja
const carta1 = baraja.sacarCarta();

// saca otra carta de la baraja
const carta2 = baraja.sacarCarta();

console.log(carta1); // Output: [Una carta aleatoria de la baraja]
console.log(carta2); // Output: [Otra carta aleatoria de la baraja]
```


En este ejemplo, se crea una baraja de cartas `baraja` utilizando la clase `Baraja`. Luego, se mezclan aleatoriamente las cartas de la baraja y se sacan dos cartas de la baraja usando el método `sacarCarta()`. Finalmente, se imprimen en consola las dos cartas obtenidas.

---

## Ejercicio 3

En este ejercicio se define la clase `Mano`, que representa una mano de cartas de póquer. La mano se crea inicialmente vacía y va agregando cartas. Además, tiene un método para calcular el valor de la mano.

El constructor de la clase `Mano` debe inicializar la propiedad `cartas` como un array vacío.

El método `agregarCarta` debe recibir un objeto de tipo `Carta` como parámetro y agregarlo a la propiedad `cartas` de la mano.

El método `getValor` debe calcular el valor de la mano. El valor se calcula sumando el valor de las cartas, donde las cartas con valor "J", "Q" y "K" tienen un valor de 10 y las cartas con valor "A" tienen un valor de 1. Si la suma de las cartas es mayor a 21 y la mano tiene un As, se resta 10 de la suma total. Esto se debe a que el As puede tener un valor de 1 o 11, y para evitar pasarse de 21, si se tiene un As y la suma total es mayor que 21, se resta 10.

A continuación se muestra un ejemplo del uso de la clase `Mano`:

```js
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

console.log(`Cartas en la mano: ${mano.cartas}`);
console.log(`Valor de la mano: ${valor}`);
```

En este ejemplo, se crea una baraja de cartas `baraja` y una mano de cartas `mano` utilizando las clases `Baraja` y `Mano` respectivamente. Luego, se mezclan aleatoriamente las cartas de la baraja y se sacan dos cartas de la baraja utilizando el método `sacarCarta()` de la clase `Baraja`. Las dos cartas obtenidas se agregan a la mano utilizando el método `agregarCarta()` de la clase `Mano`. Finalmente, se calcula el valor de la mano utilizando el método `getValor()` de la clase `Mano` y se imprimen el valor de la mano y las cartas en la mano.

---

## Ejercicio 4

En este ejercicio se define la clase `Jugador`, que representa un jugador del juego de Blackjack. El jugador tiene una mano de cartas, que puede ir agregando a medida que se desarrolla el juego.

El constructor de la clase `Jugador` debe inicializar la propiedad `mano` como un objeto de la clase `Mano` y la propiedad `plantado` como `false`. La propiedad `plantado` indica si el jugador se ha plantado o no en su turno.

El método `agregarCarta` debe agregar una carta a la mano del jugador. Además, si el valor de la mano del jugador es mayor a 21, se debe establecer la propiedad `plantado` como `true`.

El método `plantarse` simplemente cambia la propiedad `plantado` a `true`.

El método `mostrarMano` devuelve un string con las cartas de la mano del jugador. Si el parámetro `oculto` es `true`, solo se muestra la primera carta de la mano del jugador, y el resto se muestran como "?" para simular que están ocultas. Si `oculto` es `false`, se muestran todas las cartas de la mano.

A continuación se muestra un ejemplo del uso de la clase `Jugador`:

```js
const baraja = new Baraja();
const jugador = new Jugador();

// mezcla las cartas en la baraja
baraja.mezclar();

// saca dos cartas de la baraja y las agrega a la mano del jugador
const carta1 = baraja.sacarCarta();
jugador.agregarCarta(carta1);

const carta2 = baraja.sacarCarta();
jugador.agregarCarta(carta2);

// muestra la mano del jugador
console.log(`Mano del jugador: ${jugador.mostrarMano()}`);

// el jugador se planta
jugador.plantarse();

// muestra la mano del jugador ocultando la segunda carta
console.log(`Mano del jugador (ocultando una carta): ${jugador.mostrarMano(true)}`);
```

En este ejemplo, se crea una baraja de cartas `baraja` y un jugador `jugador` utilizando las clases `Baraja` y `Jugador` respectivamente. Luego, se mezclan aleatoriamente las cartas de la baraja y se sacan dos cartas de la baraja utilizando el método `sacarCarta()` de la clase `Baraja`. Las dos cartas obtenidas se agregan a la mano del jugador utilizando el método `agregarCarta()` de la clase `Jugador`. Después, se muestra la mano del jugador utilizando el método `mostrarMano()` de la clase `Jugador`. Finalmente, el jugador se planta y se muestra la mano del jugador ocultando la segunda carta utilizando el parámetro `oculto` del método `mostrarMano()`.

---

## Ejercicio 5

En este ejercicio se define la clase `Juego`, que representa un juego de Blackjack completo. El juego tiene una baraja de cartas, un jugador y un crupier. Además, tiene métodos para repartir las cartas, jugar el juego y mostrar el resultado.

En el constructor de la clase `Juego`, se debe inicializar la propiedad `baraja` como un objeto de la clase `Baraja`, mezclar la baraja, inicializar la propiedad `jugador` como un objeto de la clase `Jugador`, inicializar la propiedad `crupier` como otro objeto de la clase `Jugador`, y repartir dos cartas al jugador y dos cartas al crupier.

El método `mostrarManos` debe mostrar en pantalla las cartas del jugador y del crupier. Si el parámetro `oculto` es `true`, se debe ocultar la segunda carta del crupier.

El método `jugar` es el método principal del juego y se encarga de pedir al jugador si quiere pedir una carta o plantarse, repartir cartas si el jugador pide, y pasar el turno al crupier una vez que el jugador se planta. Luego, el método se encarga de ejecutar la estrategia del crupier y, finalmente, muestra las manos del jugador y del crupier, y determina el resultado del juego.

En el bucle while que se encarga de gestionar el turno del jugador, se debe mostrar en pantalla las cartas del jugador y del crupier, preguntar al jugador si quiere pedir otra carta o plantarse, y si el jugador pide otra carta, se reparte una carta al jugador. Si el jugador se planta, se cambia la propiedad `plantado` del jugador a `true`.

En el bucle while que se encarga de gestionar el turno del crupier, se debe crear una estrategia que determine si el crupier pide otra carta o se planta. Si el crupier pide otra carta, se reparte una carta al crupier. Si el crupier se planta, se cambia la propiedad `plantado` del crupier a `true`.

Finalmente, el método debe mostrar la mano final del jugador y del crupier y determinar el resultado del juego en función de las reglas del Blackjack.

A continuación se muestra un ejemplo del uso de la clase `Juego`:

```js
const juego = new Juego();
await juego.jugar();
```

En este ejemplo, se crea un objeto `juego` de la clase `Juego`. Luego, se llama al método `jugar()` del objeto `juego`, que inicia el juego completo. El `await` es utilizado porque el método `jugar()` utiliza la función `prompt()` de la biblioteca `prompts` para obtener la respuesta del jugador.