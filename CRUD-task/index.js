const express = require("express");
const app = express();

app.use(express.json())
const server = app.listen(3000, () => {
    console.log("App listening on port 3000 !")
})
const task_router = require("./router/taskRouter")


app.use(task_router)