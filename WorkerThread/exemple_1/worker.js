const { parentPort} = require("worker_threads")

function intensiveCPUTask(){
    console.log("Task start")

    let i = 0;
    while (i < Math.pow(10,10)) {
        i++;
    }

    console.log("Task end")
}


parentPort.postMessage("Intensive task start")

intensiveCPUTask()

parentPort.postMessage("Intensive task end")
