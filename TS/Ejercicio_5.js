var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombreParam, apellidoParam, directionParam, telefonoParam, edadParam) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direction = directionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }
    Persona.prototype.CorroborarEdad = function () {
        if (this.edad >= 18) {
            console.log("La persona es mayor de edad");
        }
        else {
            console.log("La persona es menor de edad");
        }
    };
    Persona.prototype.imprimirDatos = function () {
        console.log("El nombre de la persona es: ".concat(this.nombre + " " + this.apellido));
        console.log("La direcci\u00F3n de la persona es: ".concat(this.direction));
        console.log("El telefono de la persona es: ".concat(this.telefono));
        console.log("La edad de la persona es: ".concat(this.edad));
    };
    return Persona;
}());
var empleado = /** @class */ (function (_super) {
    __extends(empleado, _super);
    function empleado(nombreParam, apellidoParam, directionParam, telefonoParam, edadParam, sueldoParam) {
        var _this = _super.call(this, nombreParam, apellidoParam, directionParam, telefonoParam, edadParam) || this;
        _this.sueldo = sueldoParam;
        return _this;
    }
    empleado.prototype.CargarSueldo = function (sueldoParam) {
        this.sueldo = sueldoParam;
    };
    empleado.prototype.imprimirSueldo = function () {
        console.log("El suelo del empleado es: $ ".concat(this.sueldo));
    };
    return empleado;
}(Persona));
var empleadito = new empleado("Luis Jared", "Aparicio Linares", "Col landaverde", "666 - 777", 30, 1200);
console.log(empleadito);
empleadito.imprimirDatos();
empleadito.imprimirSueldo();
