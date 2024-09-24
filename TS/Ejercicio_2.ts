class calculadora {

    numero1: number;
    numero2: number;


    constructor(numero1Num: number, numero2Num: number) {

        this.numero1 = numero1Num;
        this.numero2 = numero2Num;

    }

    suma(): number {
        return this.numero1 + this.numero2;
    }

    resta(): number {
        return this.numero1 - this.numero2;
    }

    multiplicar(): number {
        return this.numero1 * this.numero2;
    }

    dividir(): number | null {

        if (this.numero2 !== 0) {

            return this.numero1 / this.numero2;
        } else {
            console.log("Ingrese un numero diferente de cero para el denominador");
            return null;
        }
    }

    //Para el caso de la potencia, el primer argumento es el valor base y sel segundo es la potencia, en este caso 7 es el valor base y 5 la potencia
    potencia(): number {
        let valor: number = 1;

        for (let i = 1; i <= this.numero2; i++) {
            valor *= this.numero1;
        }
        return valor;
    }
 //Para el caso del factorial, se toma el primer argumento del objeto, para este caso se sacara el factorial de 7
    factorial(): number {
        let valor: number = 1;
        for (let i = this.numero1; i > 0; i--) {
            valor *= i;
        }

        return valor;
    }
}


let calculadorsita = new calculadora(7, 5);

console.log(calculadorsita.suma());
console.log(calculadorsita.resta());
console.log(calculadorsita.multiplicar());
console.log(calculadorsita.dividir());
console.log(calculadorsita.potencia());
console.log(calculadorsita.factorial());