const https = require('https');

const get = (url) => new Promise((resolve, reject) => {
    const comp = url.split('/');
    const host = comp.shift();
    const options = {
        host,
        path: `/${comp.join('/')}`,
        method: 'GET',
    };

    const req = https.request(options, (res) => {
        res.setEncoding('utf8');
        let body = '';
        res.on('data', d => {
            body += d;
        });

        res.on('end', d => {
            const parsed = JSON.parse(body);
            console.log(parsed);
        });
    });

    req.on('error', (e) => {
        console.log(e);
    });

    req.end();
});


//se ha simplificado el uso de la API creado una fachada
get('jsonplaceholder.typicode.com/users');