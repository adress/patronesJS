const commander = (() => {
    const o = {
        comprar: x => console.log(`Comprando ${x}...`),
        vender: x => console.log(`Vendiendo ${x}...`)
    };

    return {
        run: (comando, argumentos) => {
            if (!o[comando]) {
                console.log('Comando no existe');
                return;
            }

            o[comando](argumentos);
        }
    };
})();

commander.run('comprar', 'BTC');
commander.run('vender', 'BTC');