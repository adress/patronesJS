function* iterador(col) {
    var nextIndex = 0;

    while (nextIndex < col.length) {
        yield col[nextIndex++];
    }
}

const x = iterador([1, 2, 3, 4, 5]);
console.log(x.next()); // 1
console.log(x.next()); // 2
console.log(x.next()); // 3
console.log(x.next()); // 4
console.log(x.next()); // 5
console.log(x.next()); // undefined