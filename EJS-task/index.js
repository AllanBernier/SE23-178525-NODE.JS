const express = require("express");
const app = express();
const path = require("path");


app.use(express.json())
const server = app.listen(3000, () => {
    console.log("App listening on port 3000 !")
})
const task_router = require("./router/taskRouter")


app.use(express.urlencoded({extended : true}))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(task_router)