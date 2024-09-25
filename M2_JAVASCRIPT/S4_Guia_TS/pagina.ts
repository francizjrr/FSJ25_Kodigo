class CabeceraPagina {
    titulo: string;
    color: string;
    fuente: string;

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    obtenerPropiedades(): void {
        console.log(`Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`);
    }

    definirAlineacion(alineacion: 'centro' | 'derecha' | 'izquierda'): void {
        console.log(`El título está alineado a la ${alineacion}`);
    }

    imprimirPropiedades(): void {
        console.log(`Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`);
    }
}

const pagina = new CabeceraPagina("Mi Página", "Azul", "Arial");
pagina.obtenerPropiedades();
pagina.definirAlineacion('centro');
pagina.imprimirPropiedades();
