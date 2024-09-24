var Cancion = /** @class */ (function () {
    function Cancion(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = '';
    }
    Object.defineProperty(Cancion.prototype, "getAutor", {
        get: function () {
            return this.autor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cancion.prototype, "setAutor", {
        set: function (autor) {
            this.autor = autor;
        },
        enumerable: false,
        configurable: true
    });
    Cancion.prototype.mostrarDatos = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo, ", G\u00E9nero: ").concat(this.genero, ", Autor: ").concat(this.autor));
    };
    return Cancion;
}());
var cancion = new Cancion("Imagine", "Rock");
cancion.setAutor = "John Lennon";
cancion.mostrarDatos();
