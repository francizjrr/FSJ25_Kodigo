<?php

//* Ejercicio 1: Lista Invertida
function invertirLista($array) {
    return array_reverse($array);
}

$array = [1, 2, 3, 4, 5];
$resultado = invertirLista($array);
print_r($resultado);

//* Ejercicio 2: Numeros pares
function sumaNumerosPares($array) {
    $suma = 0;
    foreach ($array as $num) {
        if ($num % 2 == 0) {
            $suma += $num;
        }
    }
    return $suma;
}

$array = [1, 2, 3, 4, 5, 6];
echo "Suma de números pares: " . sumaNumerosPares($array);

//* Ejercicio 3: Frecuencia
function frecuenciaCaracteres($cadena) {
    $frecuencia = [];
    for ($i = 0; $i < strlen($cadena); $i++) {
        $caracter = $cadena[$i];
        if (isset($frecuencia[$caracter])) {
            $frecuencia[$caracter]++;
        } else {
            $frecuencia[$caracter] = 1;
        }
    }
    return $frecuencia;
}

$cadena = "hola mundo";
$resultado = frecuenciaCaracteres($cadena);
print_r($resultado);

//* Ejercicio 4:  Bucle Anidado
function imprimirPiramide($altura) {
    for ($i = 1; $i <= $altura; $i++) {
        // Imprimir espacios en blanco
        for ($j = $altura - $i; $j > 0; $j--) {
            echo " ";
        }
        // Imprimir asteriscos
        for ($k = 1; $k <= (2 * $i - 1); $k++) {
            echo "*";
        }
        echo "\n";
    }
}

$altura = 5;
imprimirPiramide($altura);

?>