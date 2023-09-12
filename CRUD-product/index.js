
const express = require("express")
const app = express()
const product_router = require("./router/productRouter")
require("dotenv").config()
const mongoose = require("mongoose")
 
 
mongoose.connect(process.env.MONGO_URI)
.then( () => {
    console.log("Connection succes")
    app.listen(process.env.PORT, () => {
        console.log(`App listening on port ${process.env.PORT} !`)
    })    
})
.catch( () => {
    console.log("Connection to db failed")
})




app.use(express.json())
app.use(product_router)


