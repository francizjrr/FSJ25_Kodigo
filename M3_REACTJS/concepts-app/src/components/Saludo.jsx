import { useState } from "react";
import { Despedida } from "./Despedida";

//Declaración de un COMPONENTE
export const Saludo = ()=> {
    //let nombre = "Jairo";

    //Primer HOOK -> "useState"
    //HOOK -> Es una función prehecha para realizar X acción
    //"useState(VALOR INICIAL)"
    const [nombre,cambiarNombre] = useState("Fran");

    return(
        <div>
            <h3>Yo en realidad estoy en el componente Saludo</h3>
            <h4>Hola {nombre}, ¿cómo estas?</h4>
            <button onClick={()=> cambiarNombre("Jairo")}>Cambiar nombre</button>
        
            <Despedida nombreUsuario={nombre}/>
        </div> 
    )
}
