var cancion = /** @class */ (function () {
    function cancion(tituloParam, generoParam) {
        this.titulo = tituloParam;
        this.genero = generoParam;
    }
    cancion.prototype.getAutor = function () {
        return this.autor;
    };
    cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    cancion.prototype.imprimirDatos = function () {
        console.log("El autor  es: ".concat(this.autor));
        console.log("La canci\u00F3n  es: ".concat(this.titulo));
        console.log("El genero  es: ".concat(this.genero));
    };
    return cancion;
}());
var cancioncita = new cancion("Heal the world", "Pop");
cancioncita.setAutor("Michael Jackson");
cancioncita.imprimirDatos();
