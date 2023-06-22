//implementacion del patron constructor

class MiClase {
    constructor() {
        this.propiedad1 = 1;
        this.meotodo1 = () => {
            //soy una funcion
        };
    }
}

const instancia = new MiClase();
console.log(instancia);


//implementacion del patron constructor con parametros

class MiClase2 {
    constructor(param1, param2) {
        this.propiedad1 = param1;
        this.meotodo1 = param2;
    }
}

const instacia2 = new MiClase2(1, () => {
    //soy una funcion
});
console.log(instacia2);