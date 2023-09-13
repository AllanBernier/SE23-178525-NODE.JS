const {Worker} = require('worker_threads')

const useWorker = () => {
    return new Promise( (resolve, reject) => {
        const intensiveTask = new Worker("./worker.js")

        intensiveTask.on("message", message => {
            console.log(message)
            return resolve
        })
    })
}

const main = async() => {
    setInterval( ()=> {
        console.log("Process working")
    },1000);
    await useWorker();
}

main()
