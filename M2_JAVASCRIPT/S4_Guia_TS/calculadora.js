var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    };
    Calculadora.prototype.potencia = function (base, exponente) {
        return Math.pow(base, exponente);
    };
    Calculadora.prototype.factorial = function (n) {
        if (n === 0 || n === 1)
            return 1;
        var resultado = 1;
        for (var i = n; i > 1; i--) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
var calc = new Calculadora();
console.log(calc.sumar(3, 5)); // 8
console.log(calc.potencia(2, 3)); // 8
console.log(calc.factorial(5)); // 120
