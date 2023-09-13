const app = require("../index")
const request = require("supertest")
const Product = require("../model/Product");


describe('Product test', () => { 

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

