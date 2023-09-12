const Product = require("../model/Product");

const indexP = (req, res) => {

    
    Product.find()
    .then( (result) => {
        console.log(result)

        res.render("index", {products : result})})
    .catch( (err) => res.render("index", {message : "Query failed"}));
}

const showP = (req, res) => {
    Product.findById(req.params.id)
    .then( (result) => {
        console.log(result)
        res.json(result)})
    .catch( (err) => res.status(403).json({message : `Product not found ${err}`}));
}

const storeP = (req, res) => {
    Product.create(req.body)
    .then( (result) => res.status(201).json(result))
    .catch( (err) => res.status(403).json({message : `Product not created ${err}`}));
}
const updateP = (req, res) => {
    Product.updateOne({_id : req.params.id}, req.body)
    .then( (result) => res.json(result))
    .catch( (err) => res.status(403).json({message : "Product not Updated"}));
}
const destroyP = (req, res) => {
    Product.deleteOne({_id : req.params.id})
    .then( (result) => res.json(result))
    .catch( (err) => res.status(403).json({message : "Product not not found"}));
}

module.exports = {
    indexP,
    showP,
    updateP,
    storeP,
    destroyP,
}