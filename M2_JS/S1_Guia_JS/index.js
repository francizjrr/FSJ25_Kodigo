//* EJERCICIO 1
function verificarEdad(edad){
    return edad >= 18 ? "La persona es mayor de edad." : "La persona es menor de edad.";
}
  // Ejemplo:
let edadUsuario = 18;{
    console.log(verificarEdad(edadUsuario));
}


//* EJERCICIO 2
// Función para calcular la nota final de un alumno
function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    // Calcula la nota de cada componente basado en su porcentaje
    let notaExamen = examen * 0.20;
    let notaTareas = tareas * 0.40;
    let notaAsistencia = asistencia * 0.10;
    let notaInvestigacion = investigacion * 0.30;

    // Suma las notas para obtener la nota final
    let notaFinal = notaExamen + notaTareas + notaAsistencia + notaInvestigacion;

    // Muestra los datos del alumno y la nota final
    console.log("Nombre del alumno: " + nombre);
    console.log("Carnet del alumno: " + carnet);
    console.log("Nota final: " + notaFinal.toFixed(2)); // Redondea a 2 decimales
}

  // Ejemplo:
  let nombreAlumno = "Francisco Montoya";
  let carnetAlumno = "ESEN12345";
  let examenNota = 85;        // Nota en el examen
  let tareasNota = 90;        // Nota en las tareas
  let asistenciaNota = 100;   // Nota en asistencia
  let investigacionNota = 95; // Nota en la investigación

// Llama a la función para calcular la nota final y mostrar los datos
calcularNotaFinal(nombreAlumno, carnetAlumno, examenNota, tareasNota, asistenciaNota, investigacionNota);


//* EJERCICIO 3
// Función para calcular el aumento salarial
function calcularAumento(nombre, salario, categoria) {
  let aumentoPorcentaje;

  // Determina el porcentaje de aumento según la categoría
  switch (categoria) {
    case 'A':
      aumentoPorcentaje = 0.15;
      break;
    case 'B':
      aumentoPorcentaje = 0.30;
      break;
    case 'C':
      aumentoPorcentaje = 0.10;
      break;
    case 'D':
      aumentoPorcentaje = 0.20;
      break;
    default:
      console.log("Categoría no válida");
      return;
  }

  // Calcula el aumento
  let aumento = salario * aumentoPorcentaje;
  let nuevoSalario = salario + aumento;

  // Muestra los datos del empleado y el aumento salarial
  console.log("Nombre del empleado: " + nombre);
  console.log("Salario actual: " + salario.toFixed(2));
  console.log("Categoría: " + categoria);
  console.log("Aumento salarial: " + aumento.toFixed(2));
  console.log("Nuevo salario: " + nuevoSalario.toFixed(2));
}

// Ejemplo:
let nombreEmpleado = "Juan Pérez";
let salarioEmpleado = 2000;  // Salario actual en unidades monetarias
let categoriaEmpleado = 'B'; // Categoría del empleado

// Llama a la función para calcular el aumento y mostrar los datos
calcularAumento(nombreEmpleado, salarioEmpleado, categoriaEmpleado);


//* EJERCICIO 4
//Funcion para determinar cúal es el numero mayor
function calcularMayor(num1, num2) {
  if (num1 > num2) {
    return num1 + " es mayor";
  }else if (num2 > num1){
    return num2 + " es mayor";
  }else{
    return "Son iguales";
  }
}

//Ejemplo:
let numero1 = 10;
let numero2 = 20;

console.log(calcularMayor(numero1, numero2));

//* EJERCICIO 5
function calcularDescuentoCoche(modelo) {
    let descuento = 0;
    switch (modelo) {
        case 'FORD FIESTA':
            descuento = 0.05;
            break;
        case 'FORD FOCUS':
            descuento = 0.10;
            break;
        case 'FORD ESCAPE':
            descuento = 0.20;
            break;
        default:
            return "Modelo no válido";
    }
    return `Modelo: ${modelo}\nDescuento: ${(descuento * 100)}%`;
}

// Ejemplo:
console.log(calcularDescuentoCoche("FORD FOCUS"));

//* EJERCICIO 6
function calcularDescuentoViaje(origen, destino) {
    let descuento = 0;
    if (origen === 'Palma') {
        switch(destino) {
            case 'La costa del Sol':
                descuento = 0.05;
                break;
            case 'Panchimalco':
                descuento = 0.10;
                break;
            case 'Puerto el Triunfo':
                descuento = 0.15;
                break;
            default:
                return "Destino no válido";
        }
    }
    return `Origen: ${origen}\nDestino: ${destino}\nDescuento: ${(descuento * 100)}%`;
}

// Ejemplo:
console.log(calcularDescuentoViaje('Palma', 'Panchimalco'));


//* EJERCICIO 7
function analizarNumeros(numeros) {
    let negativos = 0, positivos = 0, multiplos15 = 0, acumuladoPares = 0;
    numeros.forEach(num => {
        if (num < 0) negativos++;
        if (num > 0) positivos++;
        if (num % 15 === 0) multiplos15++;
        if (num % 2 === 0) acumuladoPares += num;
    });
    return { negativos, positivos, multiplos15, acumuladoPares };
}

// Ejemplo:
console.log(analizarNumeros([10, -5, 30, 2, -7, 15, 6, -2, 45, 12]));

//* EJERCICIO 8
function mostrarTablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Ejemplo:
mostrarTablaMultiplicar(5);

//* EJERCICIO 9
function convertirTemperatura(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    let mensaje;
    if (fahrenheit >= 14 && fahrenheit <= 32) mensaje = "Temperatura baja";
    else if (fahrenheit > 32 && fahrenheit <= 68) mensaje = "Temperatura adecuada";
    else if (fahrenheit > 68 && fahrenheit <= 96) mensaje = "Temperatura alta";
    else mensaje = "Temperatura desconocida";
    return `Temperatura en Fahrenheit: ${fahrenheit}\n${mensaje}`;
}

//* EJERCICIO 10
function promedioEdades(turnos) {
    let promedios = turnos.map(estudiantes => estudiantes.reduce((a, b) => a + b) / estudiantes.length);
    return promedios;
}

// Ejemplo:
console.log(promedioEdades([[15, 16, 14], [17, 18, 17], [20, 19, 21]]));


