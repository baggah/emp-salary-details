# Employee Salary Calculator API
**Description** 

NodeJs Api which calculates the monthly income tax as well as gross and net monthly income .

## As Build Details
emp-salary-details api triggered by POST Method call

**Main file**
``` js
app.js 

```

**Input Json to API**
```json
{
    "name": "EmployeeName",
    "annualSalary": "120001"
}
```
**Output Json from Lambda**
```json
{
    "name": "Monthly payslip for: EmployeeName",
    "grossMonthlyIncome": "$10000.08",
    "monthlyIncomeTax": "$1833.36",
    "netMonthlyIncome": "$8166.72"
}
```


## Unit Testing

1. mocha
https://www.npmjs.com/package/mocha
2. chai/ chai-http
https://www.npmjs.com/package/chai

Unit testing class can be found in below path.
```
emp-salary-details
    -app.js
    -test
      -app.test.js
```
Executing unit test
```bash
npm run test
```
## Documentation
The API expects the annual salary as input and returns the below details in output:
   - Gross monthly income : annual salary / 12 (months)
   - Monthly income tax : 

          -Income from $0 - $20,000 has tax payable of $0
          -Income from $20,001 - $40,000 has tax payable of 10c for each $1 over $20,00
          -Income from $40,001 - $80,000 has tax payable of 20c for each $1 over $40,000
          -Income from $80,001 - $180,000 has tax payable of 30c for each $1 over $80,000
          -Income from $180,001 and over has tax payable of 40c for each $1 over $180,00
     
   - Net monthly income : gross monthly income - income tax

## Installation

> How to package the module
``` bash
$ npm install
```


## Change Log

### 1.0.0
  - API gets triggered by the POST request and responds back salary and tax details
