//definir lo que mas se peuda con cost
const objeto = {
    nombre: 'Juan'
};

//y si de alguna forma se quiere modificar el objeto hacerlo asi:
const objeto2 = {
    ...objeto,
    apellido: 'Perez'
};

console.log(objeto, objeto2);