const printname = (name) => {
    return function () {
        console.log(name);
    }
}

console.log(printname('Juan')); // [Function]

//ejecutar la funcion interna
printname('Juan')(); // Juan