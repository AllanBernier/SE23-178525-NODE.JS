const Product = require("../model/Product");

const index = (req, res) => {

    
    Product.find()
    .then( (result) => {
        console.log(result)

        res.render("index", {products : result})})
    .catch( (err) => res.render("index", {message : "Query failed"}));
}

const create = (req, res) => {
    res.render("create")
}

const edit = (req, res) => {
    Product.findById(req.params.id)
    .then( (result) => {
        res.render("edit", {product : result})
    })
}

const show = (req, res) => {
    Product.findById(req.params.id)
    .then( (result) => {
        console.log(result)
        res.json(result)})
    .catch( (err) => res.status(403).json({message : `Product not found ${err}`}));
}

const store = (req, res) => {
    
    Product.create(req.body)
    .then( () => res.redirect("/product"))
    .catch( () => res.redirect("/product"));
}
const update = (req, res) => {
    Product.updateOne({_id : req.params.id}, req.body)
    .then( (result) => res.json(result))
    .catch( (err) => res.status(403).json({message : "Product not Updated"}));
}
const destroy = (req, res) => {
    Product.deleteOne({_id : req.params.id})
    .then( (result) => res.redirect("/product"))
    .catch( (err) => res.redirect("/product"));
}

module.exports = {
    index,
    show,
    update,
    store,
    destroy,
    create,
    edit,

}