const express = require('express');
const axios = require('axios');
const { get } = require('./handlers');

const app = express();
const port = 3000;
 
//ahora axios es inyectado en el handler como una dependencia
app.get('/', get(axios));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));