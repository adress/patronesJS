const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    //hay un fuerte acoplamiento a esta llamada http lo que hace que sea dificil de testear
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    res.send(data);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));