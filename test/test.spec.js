var chai  = require('chai');
var chaiHttp=require('chai-http');
chai.use(chaiHttp);
var server=require("../index") 

describe("GET /read-users",()=>{
    it("response should be 200",(done)=>{
        chai.request(server).get("/read-users").end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.a("array");
            done();
        })
    })
})
describe("POST /Create-user",()=>{
    it("response should be 200",(done)=>{
        let obj={
            name:"som",
            job:"node",
            age:18
        }
        chai.request(server).get("/create-user").send(obj).end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.a("object");
            done();
        })
    })
})