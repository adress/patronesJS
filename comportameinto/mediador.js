const Emiter = (() => {
    const topics = {};
    const hOP = topics.hasOwnProperty

    return {
        on: (topic, listener) => {
            if (!hOP.call(topics, topic)) topics[topic] = []
            topics[topic].push(listener)
        },

        emit: (topic, info) => {
            if (!hOP.call(topics, topic)) return
            topics[topic].forEach(item =>
                item(info != undefined ? info : {}))
        }
    }
})()

Emiter.on('evento', console.log);
Emiter.on('evento', console.log);

Emiter.emit('evento', {
    a: 1, b: 2
});
