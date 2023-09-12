let task_list = [
    {id : 1, name : "todo : test", duree : 8},
    {id : 2, name : "todo : task 1", duree : 12},
    {id : 3, name : "todo : task 2", duree : 7},
    {id : 4, name : "todo : task 3", duree : 71}
];
let max_id = 4

const index = (req, res) => {
    res.render("index", {tasks : task_list});
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
    
    res.redirect("/task")

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

    res.redirect("/task")

}

const destroy = (req, res) => {
    const id = Number(req.params.id);
    const index = task_list.findIndex(task => task.id === id);
    task_list.splice(index, 1);
    res.redirect("/task")
}

const show = (req, res) => {
    const id = Number(req.params.id);
    res.json( task_list.find(task => task.id === id))

}
 
const create = (req, res) => {

    res.render("edit", {task : null})
}

const edit = (req, res) => {
    res.render("edit", {task : task_list.find(task => task.id == req.params.id)})
}



module.exports = {
    show, index, update, destroy, store, create, edit
}
