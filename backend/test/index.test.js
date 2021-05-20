const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);
const pg = require("pg");

// TODO: follow up on Jest not exiting properly

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
});


describe("GET /contact", () => {
    it("sends a request to endpoint", async done => {
        const res = await request.get("/contact");
        done();
    });
    
    it("gets status code 200 from endpoint", async done => {
        const res = await request.get("/contact");
        expect(res.status).toBe(200);
        done();
    });
    
    it("gets json object response", async done => {
        const res = await request.get("/contact");
        expect(res.type).toBe("application/json");
        done();
    });    
});


describe("GET /blog", () => {
    it("sends a request to endpoint", async done => {
        const res = await request.get("/blog");
        done();
    });
    
    it("gets status code 200 from endpoint", async done => {
        const res = await request.get("/blog");
        expect(res.status).toBe(200);
        done();
    });
    
    it("gets json object response", async done => {
        const res = await request.get("/blog");
        expect(res.type).toBe("application/json");
        done();
    });    
});


describe("GET /courses", () => {
    it("sends a request to endpoint", async done => {
        const res = await request.get("/courses");
        done();
    });
    
    it("gets status code 200 from endpoint", async done => {
        const res = await request.get("/courses");
        expect(res.status).toBe(200);
        done();
    });
    
    it("gets json object response", async done => {
        const res = await request.get("/courses");
        expect(res.type).toBe("application/json");
        done();
    });    
});


describe("GET /shop", () => {
    it("sends a request to endpoint", async done => {
        const res = await request.get("/shop");
        done();
    });
    
    it("gets status code 200 from endpoint", async done => {
        const res = await request.get("/shop");
        expect(res.status).toBe(200);
        done();
    });
    
    it("gets json object response", async done => {
        const res = await request.get("/shop");
        expect(res.type).toBe("application/json");
        done();
    });    
});