class MiClase {
    constructor(p1, p2) {
        this.propiedad = p1;
        this.propiedad2 = p2;
    };

    metodo() {
        //soy un metodo prototipo
    }
}

const instancia = new MiClase(1, 2);
console.log(instancia);

//solo funciona en el navegador
console.log(instancia.__proto__)