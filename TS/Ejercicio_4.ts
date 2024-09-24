class cuenta {

    private nombre: string;
    private cantidad: number;
    private tipoDeCuenta: string;
    private numeroDeCuenta: number;


    constructor(nombreParam: string, cantidadParam: number, tipoDeCuentaParam: string, numeroDeCuentaParam: number) {
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.tipoDeCuenta = tipoDeCuentaParam;
        this.numeroDeCuenta = numeroDeCuentaParam;
    }

    depositar(): void {
        if (this.cantidad < 5) {
            console.log("El valor debe ser mayor a $5");
        } else {
            console.log(`Se ha depositado correctamente la cantidad de: $ ${this.cantidad}`);
        }
    }

    retirar(valor: number): void {
        let total: number = this.cantidad - valor;

        if (total > 5) {
            console.log(`Se ha retirado: $ ${valor}`);
            console.log(`Queda en la cuenta un total de: $ ${total}`);
        } else {
            console.log("Fondos insuficientes");
        }
    }

    imprimirDatos() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipoDeCuenta}`);
        console.log(`Numero de cuenta: ${this.numeroDeCuenta}`);
    }
}

let cuentita = new cuenta("Cuenta LJ", 1500, "Ahorro", 1211300);

cuentita.imprimirDatos();
cuentita.depositar();
cuentita.retirar(1154);