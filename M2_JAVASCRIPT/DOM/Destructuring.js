//Objeto literal
let persona={
    nombre: "Fran",
    edad: 107,
    correr: ()=>{console.log("estoy corriendo");
    }
} 

console.log(persona.nombre);

//Destructuring Objeto -> Desestructurar un objeto
//Retiramos el valor de un atributo/metodo a una constante/variable
let {nombre, correr} = persona;
console.log(nombre);
correr()

let props = {
    nombreUsuario: "Fran"
}

const {nombreUsuario} = props;
console.log(nombreUsuario);

//Destructuting array
let arraycito = ["Fran", 75];
let [primerValor,segundoValor] = arraycito;
console.log(segundoValor);


const useForm = () => {
    return {name:"Fran", register:() => {console.log("Register")}};
}

let {register} = useForm()
register()