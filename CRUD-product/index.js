
const express = require("express")
const app = express()
const product_router = require("./router/productRouter")

const server = app.listen(3000, () => {
    console.log("App listening on port 3000 !")
})

app.use(express.json())
app.use(product_router)


