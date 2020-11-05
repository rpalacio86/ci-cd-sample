const request = require("supertest")
const app = require("../app.js")

describe("GET /", () => {
    it('displays "Hello World!"', (done) => {
        request(app).get("/").expect("Hello World!", done)
    })
})
