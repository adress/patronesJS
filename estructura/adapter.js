class Api {
    constructor() {
        this.operations = function (url, opts, verb) {
            switch (verb) {
                case 'get':
                    // return fetch(url, opts);
                    return 'get';
                case 'post':
                    // return fetch(url, opts);
                    return 'post';
                default:
                    return null;
            }
        }
    }
}

class Api2 {
    constructor() {
        this.get = function (url, opts) {
            // return fetch(url, opts);
            return 'get';
        };
        this.post = function (url, opts) {
            // return fetch(url, opts);
            return 'post';
        };
    }
}

// Adapter
class ApiAdapter {
    constructor() {
        const api2 = new Api2();
        this.operations = function (url, opts, verb) {
            switch (verb) {
                case 'get':
                    return api2.get(url, opts);
                case 'post':
                    return api2.post(url, opts);
                default:
                    return;
            }
        };
    }
}


//primera version
const api = new Api();
api.operations('www.google.co', {q: 1}, 'get');


//segunda version 
const api2 = new Api2();
api2.get('www.google.co', {q: 1});

//con adaptador
const adapter = new ApiAdapter();
adapter.operations('www.google.co', {q: 1}, 'get');
