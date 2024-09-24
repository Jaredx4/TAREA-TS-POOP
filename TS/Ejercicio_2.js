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
    //Para el caso de la potencia, el primer argumento es el valor base y sel segundo es la potencia, en este caso 7 es el valor base y 5 la potencia
    calculadora.prototype.potencia = function () {
        var valor = 1;
        for (var i = 1; i <= this.numero2; i++) {
            valor *= this.numero1;
        }
        return valor;
    };
    //Para el caso del factorial, se toma el primer argumento del objeto, para este caso se sacara el factorial de 7
    calculadora.prototype.factorial = function () {
        var valor = 1;
        for (var i = this.numero1; i > 0; i--) {
            valor *= i;
        }
        return valor;
    };
    return calculadora;
}());
var calculadorsita = new calculadora(7, 5);
console.log(calculadorsita.suma());
console.log(calculadorsita.resta());
console.log(calculadorsita.multiplicar());
console.log(calculadorsita.dividir());
console.log(calculadorsita.potencia());
console.log(calculadorsita.factorial());
