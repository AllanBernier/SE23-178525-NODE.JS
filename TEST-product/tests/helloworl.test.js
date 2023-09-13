const app = require("../index")
const request = require("supertest")
const assert = require('assert');

test('when acces to "/" should return message "result"', () => {

    request(app)
        .get("/")
        .expect(200)
        .then(response => {
            assert(response.body.message, 'result')
        })
});

test('when acces to "/" should return message "result" v2', async () => {

    const response = await request(app).get("/")

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('result');
});