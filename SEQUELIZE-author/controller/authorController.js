const author = require("../model/author");

const index = async (req, res) => {
    const result_query = await author.findAll();
    res.json(result_query);
}

const show = async (req, res) => { 
    const result_query = await author.findByPk(req.params.id)
    res.json(result_query);
}
const store = async (req, res) => {
    await author.create({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        age : req.body.age,
        nb_posts : req.body.nb_posts,
    })
    res.status(201).json({message : "created"});
}

const edit = async (req, res) => { 
    await author.update(
        {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            age : req.body.age,
            nb_posts : req.body.nb_posts,  
        },
        {
            where: {id: req.params.id}
        }
    )
    res.json({message : "updated"})
}
const destroy = async (req, res) => {
    await author.destroy({
        where : { id : req.params.id}
    })
    res.json({message : "deleted"})
 }

module.exports = {index, show ,store, edit, destroy}