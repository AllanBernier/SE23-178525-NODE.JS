const express = require("express")
const app = express()
require("dotenv").config()

const author_router = require("./router/authorRouter");



app.use(express.json())
app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT} !`)
})

app.use(author_router);