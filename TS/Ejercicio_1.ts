class Cabecera_Pagina {

    private titulo:string;
    private color:string;
    private fuente:string;
    private alineacion:string;

    constructor(tituloParam:string, colorParam:string, fuenteParam:string){
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;        
    }
    obtenerProp():{titulo:string,color:string,fuente:string}{
        return{
            titulo:this.titulo,
            color:this.color,
            fuente:this.fuente,
        }
    }

    titulo_aling(Alineacion:string):void{
      this.alineacion = Alineacion;
    }

    imprimirDatos():void{
        console.log(`El titulo es: ${this.titulo}`);  
        console.log(`El color es: ${this.color}`);
        console.log(`La fuente es: ${this.fuente}`);
        console.log(`La alineacion es: ${this.alineacion}`);
    }
    }

let paginita = new Cabecera_Pagina("Mi pagina", "Azul", "Arial");

paginita.titulo_aling("centrado");

console.log(paginita.obtenerProp());

paginita.imprimirDatos();