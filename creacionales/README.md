# Patrones creacionales:


## Constructor:

Permite crear instancias de objetos por medio de una clase.
Nota: las clases se introducen en javascript después del ES6 anterior a esto los objetos se creaban a partir de funciones (por estándar la función se creaba con mayúscula)

Archivos:
 - constructor
 - constructor-sin-clases

## Constructor prototipo

En este caso se hace un ahorro de memoria debido las instancias comparten el mismo metodo (hacer de cuenta que es metodo que se pasa por referencia),
esto quiere decir que se se cambia el prototipo de alguna de las insatancias todos cambian.

Nota: en node no se muetran los metodos prototipos con `instancia.__proto__`, pero si se pueden ver de esta forma cuando se ejecuta en el navegador

Archivos:
    - constructor-prototipo
    - constructor-prototipo-example


## Modulo

EL patron modulo se encuentra basado en los objetos literales de javascript puede tener metodos y propiedades 

Archivos:
    - modulo

## Modulo revelador

Entre sus caracteristicas esta que tine una api publica y una privada, frente al patron modulo este no necestia delcararse en un objeto literal,
ya que se declara en un funcion o un `iife` (inmediate invoked function expression.

Archivos:
    - modulo-revelador
    - modulo-revelador-example

## Prototipo
apartir de un objeto definido genrar prototipos para otros objetos eliminando la duplicidad de codigo.
`Object.create()`