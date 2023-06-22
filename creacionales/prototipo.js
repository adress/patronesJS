//El patron prototipo es muy util para crear objetos a partir de otros objetos
//en lugar de crearlos desde cero

const perro = {
    raza: 'Pastor Alemán',
    ladrar: function() {
        console.log('Guau! soy un ', this.raza);
    }
}

//crea un objeto nuevo con el prototipo de perro
const dasmata = Object.create(perro);

dasmata.ladrar(); // Guau! soy un Pastor Alemán


//ahora dasmata tiene su propio atributo raza.
//es posible sobrescribir los atributos y metodos del prototipo
dasmata.raza = 'Dálmata';
dasmata.ladrar(); // Guau! soy un Dálmata

