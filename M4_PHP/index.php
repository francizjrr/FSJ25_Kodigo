<?php
//Comentario de una linea
/* Comentario
    Multilinea
    */

//Imprimir datos/string
echo "Holiwis llegamos a PHP \n"; // La "\n" es para salto de linea"
print "Holiwis desde print \n";

//*TEMA: Variables
//Inicializar una variable con el signo "$"
$nombre;
$nombre = "Jairo ";

$apellido = "Vega Romero";

$string = 'Cadena de texto';
$boolean = true;
$numero = 10;
$decimal = 7.5;

//*TEMA: Template String
//$template = `${nombre} ${apellido} `;
$template = "{$nombre} {$apellido}";
print($template);


//*TEMA: Operadores 
//Operador de concatenacion utilizar un punto "."
print($nombre . $apellido . "\n");

//*TEMA: Operador matematico
        $suma = $numero + $decimal;
        $resta = $numero - $decimal;
        $multiplicacion = $numero * $decimal;
        $division = $numero / $decimal;
        $residuo = $numero % $decimal;

//*TEMA: Operadores Comparacion
        $igualdad = 5 == "5";
        $igualdadEstricta = 5 === "5";
        $desigualdad = 5 != "5";
        $desigualdadEstricta = 5 !== "5";

        $mayorQue = 5 > 5;
        $menorQue = 5 < 5;
        $mayorIgual = 5 >= 5;
        $menorIgual = 5 <= 5;

//Operadores Logicos
// AND &&
// OR ||

//*TEMA: Funciones 
//?Funciones Expresadas
        function Saludar()
        {
            print("Holiwis \n");
        }

        function Despedir()
        {
            return "Chauchis \n";
        }

        $resultado = Saludar();
        $resulta2 = Despedir();
        print("Este es el resultado: {$resulta2} \n");

//?Funciones anonimas
        $funcioncita = function () {
            print("Soy anonima jeje");
        };

//?Funciones flecha
        $flechita = fn() => (print("Soy una funcion anonima flechita jejejiji"));

//?Llamado a funciones
        $funcioncita();
        $flechita();
        Saludar();
        Despedir();

