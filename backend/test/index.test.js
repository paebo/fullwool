const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);
const pg = require("pg");


describe("GET /about", () => {
    it("sends a request to /about endpoint", async done => {
        const res = await request.get("/about");
        done();
    });
    
    it("gets status code 200 from /about endpoint", async done => {
        const res = await request.get("/about");
        expect(res.status).toBe(200);
        done();
    });
    
    it("gets a response as json from /about", async done => {
        const res = await request.get("/about");
        expect(res.type).toBe("application/json");
        done();
    });
});
