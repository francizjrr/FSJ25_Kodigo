abstract class Persona {
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    esMayorDeEdad(): void {
        if (this.edad >= 18) {
            console.log("Es mayor de edad");
        } else {
            console.log("No es mayor de edad");
        }
    }

    abstract mostrarDatos(): void;
}

class Empleado extends Persona {
    sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    imprimirSueldo(): void {
        console.log(`Sueldo: $${this.sueldo}`);
    }

    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre} ${this.apellido}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Edad: ${this.edad}, Sueldo: $${this.sueldo}`);
    }
}

const empleado = new Empleado("Ana", "García", "Calle Falsa 123", "555-1234", 30, 1200);
empleado.mostrarDatos();
empleado.imprimirSueldo();
