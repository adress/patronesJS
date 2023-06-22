// los prototipos son un mecanismo por el cual los objetos en JavaScript heredan características entre sí.

//se agrega un metodo al prototipo de Object
Object.prototype.log = function () {
    console.log(this);
}

const x = { a: 1 };
x.log();

//se agrega un metodo al prototipo de String
String.prototype.trim = function () {
    try {
        return this.replace(/^\s+|\s+$/g, "");
    } catch (e) {
        return this;
    }
}

const stringTrim = "    hola mundo    ".trim();
stringTrim.log();
