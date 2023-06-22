// mixin

let mixin = {
    saludar() {
        console.log(`Hola ${this.nombre}`);
    },
    despedir() {
        console.log(`Adios ${this.nombre}`);
    }
};

//clase
class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }
}


//agregar el mixin a la clase (aumentar funcionalidad)
Object.assign(Usuario.prototype, mixin);

const usuario = new Usuario('Chanchito feliz');
usuario.saludar();
usuario.despedir();