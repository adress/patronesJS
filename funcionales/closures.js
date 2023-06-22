
//clusures: es una funcion que retorna otra funcion

const suma = (x) => (y) => x + y;
//equivalente a:
// function suma(x) {
//     return function(y) {
//         return x + y;
//     }
// }


const concatenar = (palabra) => {
    const caracterInicial = '*';
    return (otraPalabra) => {
        parablasArr = [caracterInicial, palabra, otraPalabra];
        return parablasArr.join(' ');
    }
}

console.log(suma(1)(2)); // 3
console.log(concatenar('Hola')('Mundo')); // * Hola Mundo
