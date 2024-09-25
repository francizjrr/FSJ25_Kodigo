var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }
    CabeceraPagina.prototype.obtenerPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo, ", Color: ").concat(this.color, ", Fuente: ").concat(this.fuente));
    };
    CabeceraPagina.prototype.definirAlineacion = function (alineacion) {
        console.log("El t\u00EDtulo est\u00E1 alineado a la ".concat(alineacion));
    };
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo, ", Color: ").concat(this.color, ", Fuente: ").concat(this.fuente));
    };
    return CabeceraPagina;
}());
var pagina = new CabeceraPagina("Mi Página", "Azul", "Arial");
pagina.obtenerPropiedades();
pagina.definirAlineacion('centro');
pagina.imprimirPropiedades();
