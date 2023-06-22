class Mackbook {
    precio() {
        return 1000;
    }
}

const memoria = mac => {
    const oldPrecio = mac.precio();
    mac.precio = () => oldPrecio + 100;
}

const mackbook = new Mackbook();
console.log(mackbook.precio());
memoria(mackbook);
console.log(mackbook.precio());
