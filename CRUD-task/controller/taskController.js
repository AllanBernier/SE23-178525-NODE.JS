let task_list = [
    {id : 1, name : "todo : test", duree : 8}
];
let max_id = 1

const index = (req, res) => {
    res.json(task_list);

}

const store = (req, res) => {
    const task_data = req.body;

    max_id ++;

    const task = {
        id : max_id,
        name : task_data.name,
        duree : task_data.duree
    }
    task_list.push(task);
    res.json(task);

}

const update = (req, res) => {
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

}

const destroy = (req, res) => {
    const id = Number(req.params.id);
    const index = task_list.findIndex(task => task.id === id);
    task_list.splice(index, 1);
    res.send("Task deleted")
}

const show = (req, res) => {
    const id = Number(req.params.id);
    res.json( task_list.find(task => task.id === id))

}

module.exports = {
    show, index, update, destroy, store
}
