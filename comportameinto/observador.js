const user = new User();


//aca se registran los observadores
const init = () => {
    user.on('login', userLoggedIn);
    user.on('login', retriveInitialData);
}

const userLoggedIn = () => {
    // usuario logueado
}

//inicializar la app
app.init();


//cuando el usuario da click en el boton de login
//en algun lugar del codigo
const login = () => {
    // logica de login
    //.....

    // notificar a los observadores
    user.trigger('login');
}

login();