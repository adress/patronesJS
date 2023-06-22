const suma = x => y => x + y;

console.log(suma(1)); // [Function]
console.log(suma(1)(2)); // 3

const suma1 = suma(1);
console.log(suma1(3)); // 4
