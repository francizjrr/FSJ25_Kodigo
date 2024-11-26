<?php

// Bubble Sort Descendente
function bubbleSortDescendente(&$arr) {
    $n = count($arr);
    // Recorremos toda la lista
    for ($i = 0; $i < $n; $i++) {
        // Últimos elementos ya están ordenados, por eso no los consideramos
        for ($j = 0; $j < $n - $i - 1; $j++) {
            // Si el número actual es menor que el siguiente, los intercambiamos
            if ($arr[$j] < $arr[$j + 1]) {
                $temp = $arr[$j];
                $arr[$j] = $arr[$j + 1];
                $arr[$j + 1] = $temp;
            }
        }
    }
}

// Lista de ejemplo con duplicados y valores negativos
$lista = [34, 10, -5, 23, 10, -2, 0];
echo "Lista antes de ordenar: ";
print_r($lista);

bubbleSortDescendente($lista);
echo "Lista después de ordenar: ";
print_r($lista);

// Merge Sort Alfabético
function mergeSort($arr) {
    if (count($arr) <= 1) {
        return $arr;
    }
    
    // Dividir la lista en dos mitades
    $mid = intdiv(count($arr), 2);
    $left = array_slice($arr, 0, $mid);
    $right = array_slice($arr, $mid);

    // Recursivamente ordenar las mitades
    $left = mergeSort($left);
    $right = mergeSort($right);

    // Mezclar las dos mitades ordenadas
    return merge($left, $right);
}

function merge($left, $right) {
    $result = [];
    while (count($left) > 0 && count($right) > 0) {
        if (strcasecmp($left[0], $right[0]) < 0) {
            $result[] = array_shift($left);
        } else {
            $result[] = array_shift($right);
        }
    }
    // Concatenar cualquier elemento restante
    return array_merge($result, $left, $right);
}

// Lista de ejemplo con palabras
$palabras = ["manzana", "naranja", "uva", "banana", "cereza"];
echo "Lista antes de ordenar: ";
print_r($palabras);

$palabrasOrdenadas = mergeSort($palabras);
echo "Lista después de ordenar: ";
print_r($palabrasOrdenadas);

// Insertion Sort Alfabético
function insertionSort(&$arr) {
    $n = count($arr);
    for ($i = 1; $i < $n; $i++) {
        $key = $arr[$i];
        $j = $i - 1;
        // Mover los elementos de la lista que son mayores que la clave
        while ($j >= 0 && strcmp($key, $arr[$j]) < 0) {
            $arr[$j + 1] = $arr[$j];
            $j--;
        }
        $arr[$j + 1] = $key;
    }
}

// Lista de ejemplo con nombres
$nombres = ["Juan", "Ana", "Pedro", "Maria", "Carlos"];
echo "Lista antes de ordenar: ";
print_r($nombres);

insertionSort($nombres);
echo "Lista después de ordenar: ";
print_r($nombres);
?>
