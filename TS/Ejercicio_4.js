var cuenta = /** @class */ (function () {
    function cuenta(nombreParam, cantidadParam, tipoDeCuentaParam, numeroDeCuentaParam) {
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.tipoDeCuenta = tipoDeCuentaParam;
        this.numeroDeCuenta = numeroDeCuentaParam;
    }
    cuenta.prototype.depositar = function () {
        if (this.cantidad < 5) {
            console.log("El valor debe ser mayor a $5");
        }
        else {
            console.log("Se ha depositado correctamente la cantidad de: $ ".concat(this.cantidad));
        }
    };
    cuenta.prototype.retirar = function (valor) {
        var total = this.cantidad - valor;
        if (total > 5) {
            console.log("Se ha retirado $ ".concat(valor));
            console.log("Queda en la cuenta un total de $ ".concat(total));
        }
        else {
            console.log("Fondos insuficientes");
        }
    };
    cuenta.prototype.imprimirDatos = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Tipo de cuenta: ".concat(this.tipoDeCuenta));
        console.log("Numero de cuenta: ".concat(this.numeroDeCuenta));
    };
    return cuenta;
}());
var cuentita = new cuenta("Cuenta LJ", 1500, "Ahorro", 1211300);
cuentita.imprimirDatos();
cuentita.depositar();
cuentita.retirar(1154);
