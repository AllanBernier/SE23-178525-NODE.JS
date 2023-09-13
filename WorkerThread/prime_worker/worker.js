const { parentPort} = require("worker_threads")

function intensiveCPUTask(){

    let i = 100000000000000;
    while (true) {
        i++;
        if (isPrime(i)){
            parentPort.postMessage(i + " is prime")
        }
    }
}


const isPrime = (num) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {

        if(num % i === 0) return false;

    }
    return num > 1;
}

intensiveCPUTask()

