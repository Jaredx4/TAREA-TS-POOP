var Cabecera_Pagina = /** @class */ (function () {
    function Cabecera_Pagina(tituloParam, colorParam, fuenteParam) {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
    }
    Cabecera_Pagina.prototype.obtenerProp = function () {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente,
        };
    };
    Cabecera_Pagina.prototype.titulo_aling = function (Alineacion) {
        this.alineacion = Alineacion;
    };
    Cabecera_Pagina.prototype.imprimirDatos = function () {
        console.log("El titulo es: ".concat(this.titulo));
        console.log("El color es: ".concat(this.color));
        console.log("La fuente es: ".concat(this.fuente));
        console.log("La alineacion es: ".concat(this.alineacion));
    };
    return Cabecera_Pagina;
}());
var paginita = new Cabecera_Pagina("Mi pagina", "Azul", "Arial");
paginita.titulo_aling("centrado");
console.log(paginita.obtenerProp());
paginita.imprimirDatos();
