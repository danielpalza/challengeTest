import chai, { assert } from "chai";
import chaiHttp from "chai-http";
import app from "../backend/app.js";
let should = chai.should();
chai.use(chaiHttp);

describe("Accounts", () => {
 
  // Test /GET accounts
  describe("/GET accounts ", function () {
    it("it should return a array of accounts", (done) => {
      chai
        .request(app)
        .get("/api/accounts/get")
        .end((err, res) => {
          //console.log(res.body.accounts[0])
          res.should.have.status(200);
          res.body.accounts.should.be.a("array");
          for (let a = 0; a < res.body.accounts.length; a++) {
            res.body.accounts[a].should.have.property("n");
            res.body.accounts[a].should.have.property("t");
            res.body.accounts[a].should.have.property("saldo");
            res.body.accounts[a].should.have.property("moneda");
            res.body.accounts[a].should.have.property("tipo_letras");
          }

          done();
        });
    });

    it("it should return CC & CA accounts only", (done) => {
        chai
          .request(app)
          .get("/api/accounts/get")
          .end((err, res) => {
            //console.log(res.body.accounts[0])
            res.should.have.status(200);
            res.body.accounts.should.be.a("array");
            for (let a = 0; a < res.body.accounts.length; a++) {
            
              res.body.accounts[a].should.have.property("tipo_letras").to.be.oneOf(["CC","CA"]);
            }
  
            done();
          });
    });

    it("it should return $(pesos) or u$s(dolars) accounts only", (done) => {
        chai
          .request(app)
          .get("/api/accounts/get")
          .end((err, res) => {
            //console.log(res.body.accounts[0])
            res.should.have.status(200);
            res.body.accounts.should.be.a("array");
            for (let a = 0; a < res.body.accounts.length; a++) {
            
              res.body.accounts[a].should.have.property("moneda").to.be.oneOf(["$","u$s"]);
            }
    
            done();
          });
      });


  });

 
});

 

