//modulo revelador
const resultado = (() => {
    const x = {};

    return {
        a: () => console.log(x),
        b: (key, val) => x[key] = val
    }
})();

// call modulo revelador

resultado.a();
resultado.b("queso", "pan");
resultado.a();