//la idea es faviorecer la composicion sobre la herencia
//de tal forma que si un objeto no necesita un metodo simplemente no lo implementa


const saludar = nombre => `Hola mi nombre es ${nombre}`;
const despedir = nombre => `hasta luego`;

class Persona {
    constructor() {
        this.nombre = 'Juan';
        this.apellido = 'Perez';
        this.edad = 30;
    }

    saludar() {
        saludar(this.nombre);
    }

    despedir() {
        despedir();
    }
}

const persona = new Persona();
console.log(persona.saludar());
console.log(persona.despedir());