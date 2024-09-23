class cancion {

    public titulo: string;
    public genero: string;
    private autor: string;

    constructor(tituloParam: string, generoParam: string) {
        this.titulo = tituloParam;
        this.genero = generoParam;
    }

    getAutor(): string {
        return this.autor;
    }

    setAutor(autor: string): void {
        this.autor = autor;
    }

    imprimirDatos(): void {
        console.log(`El autor  es: ${this.autor}`);
        console.log(`La canción  es: ${this.titulo}`);
        console.log(`El genero  es: ${this.genero}`);
    }
}

let cancioncita = new cancion("Heal the world", "Pop");

cancioncita.setAutor("Michael Jackson");

cancioncita.imprimirDatos();