// ----------- esto puede estar en un archivo de utilidades ------------
const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);

//lo mismo que compose pero de izquierda a derecha
const pipe = (...fns) => (x) => fns.reduce((y, f) => f(y), x);

const trace = (x) => (y) => {
    console.log(x, y);
    return y;
};

const filter = (f) => (xs) => xs.filter(f);

const head = (xs) => xs[0];

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
    pipe(
        filter((x) => x.edad < 2),
        trace('despues de filter'),
        head,
        formateo,
        formato
    );


//console.log(traePrimerInfante);
console.log(traePrimerInfante(users));