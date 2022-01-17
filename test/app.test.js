const input = require('./input');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../app');
var expect = require('chai').expect

describe('emp-salary-details unit tests', function(){

    describe('GIVEN Salary Range 1(0 - 20K) input', function () {

        it('WHEN employee annual income is in range 1 (0-20k) AND income is 0, then monthlyIncomeTax should be 0 ',
         function () {
            chai.request(app).post('/calcEmpDetails')
            .send(input.inputRequest)
            .end(function(err,res){
                expect(res.body.monthlyIncomeTax).to.equal("$0.00");
            })
        });

        it('WHEN employee annual income is in range 1 (0-20k) AND income is 10000, then monthlyIncomeTax should be 0 ',
        function () {
           var inputRequestJson = JSON.parse(JSON.stringify(input.inputRequest));
           inputRequestJson.annualSalary = 10000;
           chai.request(app).post('/calcEmpDetails')
           .send(inputRequestJson)
           .end(function(err,res){
               expect(res.body.monthlyIncomeTax).to.equal("$0.00");
           })
       });

       it('WHEN employee annual income is in range 1 (0-20k) AND income is 20000, then monthlyIncomeTax should be 0 ',
       function () {
          var inputRequestJson = JSON.parse(JSON.stringify(input.inputRequest));
          inputRequestJson.annualSalary = "20000";
          chai.request(app).post('/calcEmpDetails')
          .send(inputRequestJson)
          .end(function(err,res){
              expect(res.body.monthlyIncomeTax).to.equal("$0.00");
          })
      });


    });


    describe('GIVEN Salary Range 2(20K - 40K) input', function () {

        it('WHEN employee annual income is in range 2 (20k-40k) AND income is 20001, then monthlyIncomeTax should be 0.01 ',
         function () {
            var inputRequestJson = JSON.parse(JSON.stringify(input.inputRequest));
            inputRequestJson.annualSalary = "20001";
            chai.request(app).post('/calcEmpDetails')
            .send(inputRequestJson)
            .end(function(err,res){
                expect(res.body.monthlyIncomeTax).to.equal("$0.01");
            })
        });

        it('WHEN employee annual income is in range 2 (20k-40k) AND income is 30000, then monthlyIncomeTax should be 83.33 ',
        function () {
            var inputRequestJson = JSON.parse(JSON.stringify(input.inputRequest));
            inputRequestJson.annualSalary = 30000;
            chai.request(app).post('/calcEmpDetails')
            .send(inputRequestJson)
            .end(function(err,res){
               expect(res.body.monthlyIncomeTax).to.equal("$83.33");
           })
       });

       it('WHEN employee annual income is in range 2 (20k-40k) AND income is 40000, then monthlyIncomeTax should be $166.67 ',
       function () {
        var inputRequestJson = JSON.parse(JSON.stringify(input.inputRequest));
        inputRequestJson.annualSalary = 40000;
        chai.request(app).post('/calcEmpDetails')
        .send(inputRequestJson)
        .end(function(err,res){
              expect(res.body.monthlyIncomeTax).to.equal("$166.67");
          })
      });


    });    


    describe('GIVEN Salary Range 3(40K - 80K) input', function () {

        it('WHEN employee annual income is in range 3 (40k-80k) AND income is 40001, then monthlyIncomeTax should be $166.68 ',
         function () {
            var inputRequestJson = JSON.parse(JSON.stringify(input.inputRequest));
            inputRequestJson.annualSalary = 40001;
            chai.request(app).post('/calcEmpDetails')
            .send(inputRequestJson)
            .end(function(err,res){
                expect(res.body.monthlyIncomeTax).to.equal("$166.68");
            })
        });

        it('WHEN employee annual income is in range 3 (40k-80k) AND income is 50000, then monthlyIncomeTax should be $333.33 ',
        function () {
            var inputRequestJson = JSON.parse(JSON.stringify(input.inputRequest));
            inputRequestJson.annualSalary = 50000;
            chai.request(app).post('/calcEmpDetails')
            .send(inputRequestJson)
            .end(function(err,res){
               expect(res.body.monthlyIncomeTax).to.equal("$333.33");
           })
       });

       it('WHEN employee annual income is in range 3 (40k-80k) AND income is 80000, then monthlyIncomeTax should be $833.33 ',
       function () {
        var inputRequestJson = JSON.parse(JSON.stringify(input.inputRequest));
        inputRequestJson.annualSalary = 80000;
        chai.request(app).post('/calcEmpDetails')
        .send(inputRequestJson)
        .end(function(err,res){
              expect(res.body.monthlyIncomeTax).to.equal("$833.33");
          })
      });

    });

      describe('GIVEN Salary Range 4(80K - 180K) input', function () {

        it('WHEN employee annual income is in range 4 (80k-180k) AND income is 80001, then monthlyIncomeTax should be $833.36 ',
         function () {
            var inputRequestJson = JSON.parse(JSON.stringify(input.inputRequest));
            inputRequestJson.annualSalary = 80001;
            chai.request(app).post('/calcEmpDetails')
            .send(inputRequestJson)
            .end(function(err,res){
                expect(res.body.monthlyIncomeTax).to.equal("$833.36");
            })
        });

        it('WHEN employee annual income is in range 4 (80k-180k) AND income is 100000, then monthlyIncomeTax should be $1333.33 ',
        function () {
            var inputRequestJson = JSON.parse(JSON.stringify(input.inputRequest));
            inputRequestJson.annualSalary = 100000;
            chai.request(app).post('/calcEmpDetails')
            .send(inputRequestJson)
            .end(function(err,res){
               expect(res.body.monthlyIncomeTax).to.equal("$1333.33");
           })
       });

       it('WHEN employee annual income is in range 4 (80k-180k) AND income is 180000, then monthlyIncomeTax should be $3333.33 ',
       function () {
        var inputRequestJson = JSON.parse(JSON.stringify(input.inputRequest));
        inputRequestJson.annualSalary = 180000;
        chai.request(app).post('/calcEmpDetails')
        .send(inputRequestJson)
        .end(function(err,res){
              expect(res.body.monthlyIncomeTax).to.equal("$3333.33");
          })
      });

    });

    describe('GIVEN Salary Range 5(180K+) input', function () {

        it('WHEN employee annual income is in range 5 (180k+) AND income is 180001, then monthlyIncomeTax should be $3333.37 ',
         function () {
            var inputRequestJson = JSON.parse(JSON.stringify(input.inputRequest));
            inputRequestJson.annualSalary = 180001;
            chai.request(app).post('/calcEmpDetails')
            .send(inputRequestJson)
            .end(function(err,res){
                expect(res.body.monthlyIncomeTax).to.equal("$3333.37");
            })
        });

        it('WHEN employee annual income is in range 5 (180k+) AND income is 200000, then monthlyIncomeTax should be $4000.00 ',
        function () {
            var inputRequestJson = JSON.parse(JSON.stringify(input.inputRequest));
            inputRequestJson.annualSalary = 200000;
            chai.request(app).post('/calcEmpDetails')
            .send(inputRequestJson)
            .end(function(err,res){
               expect(res.body.monthlyIncomeTax).to.equal("$4000.00");
           })
       });

    });
   

});