const EventEmitter = require('events')
const em = new EventEmitter();



em.on('hello-event', (name) => {
    console.log("Hello from " + name)
})

em.on('response', () => {
    console.log("This is response")
})


em.on('first-event', () => {
    console.log("First event")

    em.emit('response')
})


// em.emit('first-event')
// em.emit('hello-event', "Allan")

//
em.on('get-random', () => {
    const number = Math.floor(Math.random() * 100);
    em.emit('random-result', number)
})


//
em.on('random-result', (number) => {
    console.log(number)
})

em.emit('get-random')


// WebSockets - Pusher

