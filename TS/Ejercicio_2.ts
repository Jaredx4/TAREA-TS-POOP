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

    potencia(): number {
        let valor: number = 1;

        for (let i = 1; i <= this.numero2; i++) {
            valor *= this.numero1;
        }
        return valor;
    }

    factorial(): number {
        let valor: number = 1;
        for (let i = this.numero1; i > 0; i--) {
            valor *= i;
        }

        return valor;
    }
}


let calculadorsita = new calculadora(6, 3);

console.log(calculadorsita.suma());
console.log(calculadorsita.resta());
console.log(calculadorsita.multiplicar());
console.log(calculadorsita.dividir());
console.log(calculadorsita.potencia());
console.log(calculadorsita.factorial());