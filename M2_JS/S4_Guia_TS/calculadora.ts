class Calculadora {

    sumar(a: number, b: number): number {
        return a + b;
    }

    restar(a: number, b: number): number {
        return a - b;
    }

    multiplicar(a: number, b: number): number {
        return a * b;
    }

    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    }

    potencia(base: number, exponente: number): number {
        return base ** exponente;
    }

    factorial(n: number): number {
        if (n === 0 || n === 1) return 1;
        let resultado = 1;
        for (let i = n; i > 1; i--) {
            resultado *= i;
        }
        return resultado;
    }
}

const calc = new Calculadora();
console.log(calc.sumar(3, 5)); // 8
console.log(calc.potencia(2, 3)); // 8
console.log(calc.factorial(5)); // 120
