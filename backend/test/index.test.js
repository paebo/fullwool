const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);
const pg = require("pg");


describe("GET /about", () => {
    it("sends a request to endpoint", async done => {
        const res = await request.get("/about");
        done();
    });
    
    it("gets status code 200 from endpoint", async done => {
        const res = await request.get("/about");
        expect(res.status).toBe(200);
        done();
    });
    
    it("gets json object response", async done => {
        const res = await request.get("/about");
        expect(res.type).toBe("application/json");
        done();
    });
});


describe("GET /gallery", () => {
    it("sends a request to endpoint", async done => {
        const res = await request.get("/gallery");
        done();
    });
    
    it("gets status code 200 from endpoint", async done => {
        const res = await request.get("/gallery");
        expect(res.status).toBe(200);
        done();
    });
    
    it("gets json object response", async done => {
        const res = await request.get("/about");
        expect(res.type).toBe("application/json");
        done();
    });    
})
