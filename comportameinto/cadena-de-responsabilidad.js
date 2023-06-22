class Suma {
    constructor() {
        this.val = 1;
    }

    suma(sumValue) {
        this.val += sumValue;
        return this;
    }
}


const suma = new Suma();
const totalSuma = suma.suma(1).suma(2).suma(3).val;
console.log(totalSuma); // 7
