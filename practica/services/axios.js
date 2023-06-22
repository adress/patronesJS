const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});


//suponiendo que axios cambio para realizar un patron adapter
const adapter = {
    get: async (url) => instance.get(url),
    post: async (url, data) => instance.post(url, data),
    put: async (url, data) => instance.put(url, data),
    delete: async (url) => instance.delete(url)
};

module.exports = adapter;