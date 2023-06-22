//basicamente poder pasar funciones como argumetnos con el fin de sea mas desacoplado el codigo
//esto permite tambien realizar de una mejor forma los test

const f = (ruta, cb) => {
    //hacer algo... pesado de muchas lienas
    const resultado = realizarTareaPesada();
    cb(resultado);
}

const manejaResultado = (resultado) => {
    console.log(resultado);
}

//aqui esta la magia.... poder pasar una funcion como parametro
f('ruta', manejaResultado); 

//esto es equivalente a:
//f('ruta', resultado => manejaResultado(resultado));
