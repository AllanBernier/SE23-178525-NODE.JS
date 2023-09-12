
const express = require("express")
const app = express()
const product_router = require("./router/productRouter")
require("dotenv").config()
const mongoose = require("mongoose")
const path = require("path")
 
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

 
app.set("view engine", "ejs");
app.set("views", path.join( __dirname,"views") );

app.get("/", (req, res) => {
    const data = {
        name : ["Tata", "Toto", "Titi", "Tutu"]
    }
    res.render("helloworld", data )
})


app.use(product_router)


