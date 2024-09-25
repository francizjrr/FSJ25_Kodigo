class Cancion {
    titulo: string;
    genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = '';
    }

    get getAutor(): string {
        return this.autor;
    }

    set setAutor(autor: string) {
        this.autor = autor;
    }

    mostrarDatos(): void {
        console.log(`Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this.autor}`);
    }
}

const cancion = new Cancion("Imagine", "Rock");
cancion.setAutor = "John Lennon";
cancion.mostrarDatos();
