class Cuenta {
    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    numeroCuenta: string;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    depositar(monto: number): void {
        if (monto < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        } else {
            this.cantidad += monto;
            console.log(`Se ha depositado correctamente $${monto}`);
        }
    }

    retirar(valor: number): void {
        if (valor > this.cantidad || valor < 5) {
            console.log("No hay suficiente dinero o el valor es inválido");
        } else {
            this.cantidad -= valor;
            console.log(`Se ha retirado $${valor}, saldo restante: $${this.cantidad}`);
        }
    }

    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}, Tipo de Cuenta: ${this.tipoCuenta}, Número de Cuenta: ${this.numeroCuenta}`);
    }
}

const cuenta = new Cuenta("Juan Pérez", 100, "Ahorro", "123456789");
cuenta.depositar(50);
cuenta.retirar(30);
cuenta.mostrarDatos();
