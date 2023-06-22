const Emiter = require('events');

const emiter = new Emiter();

emiter.on('evento', console.log);

emiter.emit('evento', { a: 1, b: 2 });
