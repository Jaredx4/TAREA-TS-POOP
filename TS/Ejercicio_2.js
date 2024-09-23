var calculadora = /** @class */ (function () {
    function calculadora(numero1Num, numero2Num) {
        this.numero1 = numero1Num;
        this.numero2 = numero2Num;
    }
    calculadora.prototype.suma = function () {
        return this.numero1 + this.numero2;
    };
    calculadora.prototype.resta = function () {
        return this.numero1 - this.numero2;
    };
    calculadora.prototype.multiplicar = function () {
        return this.numero1 * this.numero2;
    };
    calculadora.prototype.dividir = function () {
        if (this.numero2 !== 0) {
            return this.numero1 / this.numero2;
        }
        else {
            console.log("Ingrese un numero diferente de cero para el denominador");
            return null;
        }
    };
    calculadora.prototype.potencia = function () {
        var valor = 1;
        for (var i = 1; i <= this.numero2; i++) {
            valor *= this.numero1;
        }
        return valor;
    };
    calculadora.prototype.factorial = function () {
        var valor = 1;
        for (var i = this.numero1; i > 0; i--) {
            valor *= i;
        }
        return valor;
    };
    return calculadora;
}());
var calculadorsita = new calculadora(6, 3);
console.log(calculadorsita.suma());
console.log(calculadorsita.resta());
console.log(calculadorsita.multiplicar());
console.log(calculadorsita.dividir());
console.log(calculadorsita.potencia());
console.log(calculadorsita.factorial());
