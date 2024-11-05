
<?php
//*TEMA: Estructuras Repetitivas
//?FOR
//Se utiliza cuando se conoce la cantidad de veces que se repetirá el ciclo. Por ejemplo, cuando se recorre un arreglo elemento por elemento.

    for ($i = 0; $i < 5; $i++) {
        print("El valor de I es: {$i} \n");
    }

//?WHILE
//Se utiliza cuando no se sabe las veces que se repetirá el ciclo, pero depende de una condición que puede cambiar durante la ejecución. Por ejemplo, cuando se intenta conectarse a una base de datos y se debe reintentar si falla.

    $contador = 1;
    while ($contador < 5) {
        print("El valor de CONTADOR es: {$contador} \n");
        $contador++;
    }

//?Do While
//Se utiliza cuando no se sabe las veces que se repetirá el ciclo, pero se necesita que se realice por lo menos una vez. Por ejemplo, cuando se debe conectarse a una base de datos y repetir hasta que se pueda conectar.

    do {
        print("El valor de CONTADOR es: {$contador} \n");
        $contador++;
    } while ($contador < 5)

?>
