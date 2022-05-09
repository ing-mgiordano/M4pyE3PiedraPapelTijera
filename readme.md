#(M4) Ejercicio EXTRA 3

Esta línea de código:
   let numRandom = Math.floor(Math.random() * (4 - 1)) + 1

Devuelve un número aleatorio entre min incluido (1) y máx excluido (4).
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random

Escribe un programa que te permite jugar piedra, papel o tijera con el ordenador.

Para ello el ordenador deberá generar un número aleatorio entre 1 y 3 que represente piedra, papel o tijera respectivamente, y el usuario deberá responder a su vez con un número entre el 1 y el 3 después de mostrar la siguiente pantalla:

Jugamos a piedra, papel o tijera:

1. Piedra

2. Papel

3. Tijera

Elección (1-3):


Si el usuario indica algún número distinto del solicitado, deberá aparecer el siguiente mensaje:
«Entiendo que no quieres jugar. Adiós»
En caso contrario, indicar al ganador de la siguiente manera:

Yo xxx y tú xxx. ¡He ganado! o ¡Has ganado!

según sea el caso.

Ejemplo:

«Yo papel y tú tijera. ¡Has ganado!»


**El papel gana la piedra porque lo envuelve; las tijeras ganan el papel para que lo cortan, y la piedra gana las tijeras para que las estropeen.