let product_list = [
    {id : 1, name: "Product 1", description : "Description product 1", price : 12},
    {id : 2, name: "Product 2", description : "Description product 2", price : 19},
    {id : 3, name: "Product 3", description : "Description product 3", price : 5},
];
let max_id = 3

const indexP = (req, res) => {
    res.json(product_list)
}

const showP = (req, res) => {
    const id = Number(req.params.id)
    res.json(product_list.find(product => product.id === id))
}

const storeP = (req, res) => {
    const product_data = req.body

    max_id++;
    const product = {
        id : max_id,
        name : product_data.name,
        description : product_data.description,
        price : product_data.price,
    }
    product_list.push(product)

    res.json(product)  
}
const updateP = (req, res) => {
    const id = Number(req.params.id);
    const index = product_list.findIndex(product => product.id === id)

    const product = {
        id : id,
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
    }

    product_list[index] = product

    res.send("Product updated")
}
const destroyP = (req, res) => {
    const id = Number(req.params.id);
    const index = product_list.findIndex(product => product.id === id)

    const product = product_list[index];
    product_list.splice(index, 1);

    res.json(product);
}

module.exports = {
    indexP,
    showP,
    updateP,
    storeP,
    destroyP,
}