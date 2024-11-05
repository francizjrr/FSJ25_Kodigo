<?php

//* Ejercicio 1: Fibonnaci.

//Aquí se define una función llamada fibonacci que recibe un número, $n, que le dice cuántos números de la serie queremos ver.
function fibonacci($n)
{

    // Se definen dos variables. "num1" guarda el primer número de la serie (0) y "num2" guarda el segundo número (1).
    $galletas1 = 0;
    $galletas2 = 1;

    // El primer número (0) se imprime en la pantalla.
    echo $galletas1;

    // Aquí se verifica si el número que le pasamos ($n) es mayor que 1. Si lo es, imprime el segundo número (1) también.
    if ($n > 1) {
        echo ", " . $galletas2;
    }

    /**Este es un bucle que empieza en 2 y sigue hasta que llegue a $n. Aquí es donde se crean los siguientes números de la serie:
     * "$num3" es la suma de "num1" y "num2" (los dos últimos números que hemos visto).
     * Se imprime "$num3".
     * Luego, "num1" se actualiza para que sea igual a num2 (es decir, el segundo número se convierte en el primero).
     * "num2" se actualiza para que sea igual a "num3" (el nuevo número se convierte en el segundo número).**/
    for ($i = 2; $i < $n; $i++) {
        $galletas3 = $galletas1 + $galletas2;
        echo ", " . $galletas3;
        $galletas1 = $galletas2;
        $galletas2 = $galletas3;
    }
}

// Finalmente, se llama a la función fibonacci y le dice que queremos los primeros 15 números de la serie.
fibonacci(10);

//! ------------------------------------------------------------------------------------------------------------

//* Ejercicio 2: n° Primos.
function esPrimo($numero)
{
    // Los números menores o iguales a 1 no son primos
    if ($numero <= 1) {
        return false;
    }

    // Solo necesitamos comprobar hasta la raíz cuadrada del número
    for ($i = 2; $i <= sqrt($numero); $i++) {
        if ($numero % $i == 0) {
            return false; // Si el número es divisible por otro número, no es primo
        }
    }

    return true; // Si no encontró divisores, el número es primo
}

$numero = 17;
if (esPrimo($numero)) {
    echo "$numero es un número primo.";
} else {
    echo "$numero no es un número primo.";
}

//* Ejercicio 3: Palídromos.

function esPalindromo($texto)
{
    // Convertimos el texto a minúsculas y eliminamos los espacios en blanco
    $texto = strtolower(str_replace(' ', '', $texto));

    // Invertimos el texto
    $textoInvertido = strrev($texto);

    // Comparamos el texto original con el texto invertido
    return $texto === $textoInvertido;
}

$cadena = "Anita lava la tina";
if (esPalindromo($cadena)) {
    echo "La cadena \"$cadena\" es un palíndromo.";
} else {
    echo "La cadena \"$cadena\" no es un palíndromo.";
}
