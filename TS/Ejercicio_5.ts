abstract class Persona {

    private nombre: string;
    private apellido: string;
    private direction: string;
    private telefono: string;
    private edad: number;

    constructor(nombreParam: string, apellidoParam: string, directionParam: string, telefonoParam: string, edadParam: number) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direction = directionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }

    CorroborarEdad() {
        if (this.edad >= 18) {
            console.log("La persona es mayor de edad");
        } else {
            console.log("La persona es menor de edad");
        }
    }

    imprimirDatos() {
        console.log(`El nombre de la persona es: ${this.nombre + " " + this.apellido}`);
        console.log(`La dirección de la persona es: ${this.direction}`);
        console.log(`El telefono de la persona es: ${this.telefono}`);
        console.log(`La edad de la persona es: ${this.edad}`);
    }
}


class empleado extends Persona {

    private sueldo: number;

    constructor(nombreParam: string, apellidoParam: string, directionParam: string, telefonoParam: string, edadParam: number, sueldoParam: number) {

        super(nombreParam, apellidoParam, directionParam, telefonoParam, edadParam);

        this.sueldo = sueldoParam;
    }

    CargarSueldo(sueldoParam: number) {
        this.sueldo = sueldoParam;
    }

    imprimirSueldo() {
        console.log(`El suelo del empleado es: $ ${this.sueldo}`);
    }

}

let empleadito = new empleado("Luis Jared", "Aparicio Linares", "Col landaverde", "666 - 777", 30, 1200);

console.log(empleadito);

empleadito.imprimirDatos();
empleadito.imprimirSueldo();