

async function intensiveCPUTask(){
    console.log("Task start")

    let i = 0;
    while (i < Math.pow(10,10)) {
        i++;
    }

    console.log("Task end")
}

setInterval( ()=> {
    console.log("Process working")
},1000)
intensiveCPUTask()








