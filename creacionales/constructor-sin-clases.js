//instancia de una clase antes de ES6 es equivalente al ejemplo constructor.js

function MiClase() {
    this.propiedad1 = 1;
    this.meotodo1 = () => {
        //soy una funcion
    };
}


const instancia = new MiClase();
console.log(instancia);
