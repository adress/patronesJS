// ----------- esto puede estar en un archivo de utilidades ------------

//esta funcion es la clave de la composicion
//fns es un array de funciones, basicamene aplica las funciones de derecha a izquierda
//-------------------------------------------------
//[a, b, c], x => a(b(c(x)))
//1. step: (x, c) => c(x)
//2. step: (c(x), b) => b(c(x))
//3. step: (b(c(x)), a) => a(b(c(x))) 
//-------------------------------------------------
const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);

//invierte el orden de los parametros de una funcion
const filter = (f) => (xs) => xs.filter(f);

const head = (xs) => xs[0];

// () => ({}) is the same as () => { return {} }
const formateo = (x) => ({
    nombreCompleto: `${x.nombre} ${x.apellido}`,
    edad: x.edad,
});

const formato = (x) => `${x.nombreCompleto} tiene ${x.edad} año(s)`;

// ----------- fin esto puede estar en un archivo de utilidades ------------

const users = [
    { edad: 17, nombre: 'Nicolas', apellido: 'soto' },
    { edad: 18, nombre: 'Chanchito', apellido: 'Feliz' },
    { edad: 12, nombre: 'Loreto', apellido: 'Fernandez' },
    { edad: 1, nombre: 'Sofía', apellido: 'Zapata' },
];

// traePrimerInfante es basicamente un alias de la funcion compuesta
const traePrimerInfante =
    compose(
        formato,
        formateo,
        head,
        filter((x) => x.edad < 2)
        //(xs) => xs.filter((x) => x.edad < 2)
    );

//lo anterior es lo mismo que:
// const traePrimerInfante = (xs) => 
//  compose(
//      formato,
//      formateo,
//      head,
//      (xs) => xs.filter((x) => x.edad < 2))(xs);    


console.log(traePrimerInfante);
console.log(traePrimerInfante(users));