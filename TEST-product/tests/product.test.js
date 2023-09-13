const app = require("../index")
const request = require("supertest")
const assert = require('assert');
const Product = require("../model/Product");
require("dotenv").config()
const mongoose = require("mongoose")


describe('Product test', () => { 

    beforeAll( async () => {
        await mongoose.connect(process.env.MONGO_URI).catch((err) => {
            console.log("Connection to db failed")
            throw err
        })
    }) 

    it('should return product when acces to GET /product/:id', async () => { 

        const p = await Product.create({
            name : "String",
            description : "String",
            price : 5,
        })
        const response = await request(app).get(`/product/${p._id}`)

        expect(response.status).toBe(200)
        expect(response.body.name).toBe("String")
        expect(response.body.description).toBe("String")
        expect(response.body.price).toBe(5)
        await Product.deleteOne({_id : p._id})

    })
 })

