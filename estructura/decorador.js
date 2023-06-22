class Mackbook {
    constructor() {
        this.precio = 1000;
        this.pantalla = 11.6;
    }
}

// se agrega funcionalidad
const mackbook = new Mackbook();
mackbook.agregarMemoria = function () {
    this.precio += 100;
}

console.log(mackbook.precio);
mackbook.agregarMemoria();
console.log(mackbook.precio);