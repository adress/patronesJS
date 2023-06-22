//fetch no esta importado, este ejempo se pude correr en el navegador

const Users = (() => {
    const recurso = 'https://jsonplaceholder.typicode.com/users';

    return {
        listar: async () => {
            return await fetch(recurso).then(x => x.json());
        },
        crear: async (data) => {
            return await fetch(recurso, { type: 'POST', body: JSON.stringify(data) }).then(x => x.json());
        }
    }
})();

Users.listar().then(x => console.log(x));
Users.crear({ name: 'Jhonatan', job: 'Developer' }).then(x => console.log(x));