
const express = require('express');
const parser = require('body-parser');

//es recomendable que los servicios se exporten desde un index.js en un modulo aparte
//como se exporto una instancia de axios basicamente se comporta como singleton
const services = require('./services');
const handlify = require('./handlers');


const usersHanddler = handlify('users');
const postsHanddler = handlify('posts');

//decode application/x-www-form-urlencoded y application/json
const app = express();
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

const port = 3000;

//patron inyeccion de dependencias
app.get('/', usersHanddler(services).get);
app.post('/', usersHanddler(services).post);
app.put('/:id', usersHanddler(services).put);
app.delete('/:id', usersHanddler(services).delete);

app.get('/posts', postsHanddler(services).get);
//app.post('/posts', postsHanddler(services).post); 
//app.put('/posts/:id', postsHanddler(services).put);
//app.delete('/posts/:id', postsHanddler(services).delete);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));