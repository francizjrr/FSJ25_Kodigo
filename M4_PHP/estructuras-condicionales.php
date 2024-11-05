<?php 
     //*TEMA: Estructuras condicionales
    //! IF - IF ELSE - IF ELSE IF ELSE 
    $condicion = true;

    if($condicion){
        print('Caso true');
    } else{
        print('Caso false');
    }

    //*TEMA: SWITCH
    $opcion = 1;

    switch($opcion){
        case 1 : 
            print("Elegiste la opcion 1");
            break;
        
        default: "Elige una opcion correcta";
    }


    //*TEMA: Ternario
    $ternario = 6 > 5 ? print("Holis") : print("Chauchis");

    
?>