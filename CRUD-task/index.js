const express = require("express");
const app = express();

app.use(express.json())
const server = app.listen(3000, () => {
    console.log("App listening on port 3000 !")
})

let task_list = [
    {id : 1, name : "todo : test", duree : 8}
];
let max_id = 1


app.get("/task", (req, res) => {
    res.json(task_list);
})
app.get("/task/:id", (req, res) => {
    const id = Number(req.params.id);
    res.json( task_list.find(task => task.id === id))
})

app.post("/task/create", (req, res) => {
    const task_data = req.body;

    max_id ++;

    const task = {
        id : max_id,
        name : task_data.name,
        duree : task_data.duree
    }
    task_list.push(task);
    res.json(task);
})
app.put("/task/:id/update", (req, res) => {
    const id = Number(req.params.id);
    const index = task_list.findIndex(task => task.id === id);
    const task_data = req.body;

    const task = {
        id : id,
        name : task_data.name,
        duree : task_data.duree
    };
    task_list[index] = task;

    res.send("Task updated")
})
app.delete("/task/:id/delete", (req, res) => {
    const id = Number(req.params.id);
    const index = task_list.findIndex(task => task.id === id);
    task_list.splice(index, 1);
    res.send("Task deleted")
})