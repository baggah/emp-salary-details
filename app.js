const src = require("./src/empSalaryDetails");
const express = require('express');
const app = express();
const port = 8080;
app.use(express.json()) 
app.listen(port, () => console.log(`Employee Salary and Tax calculation API startup ${port}!`))


app.get('/', async (req, res) => {
    res.send('get employee details using post method')
});
app.post('/calcEmpDetails', (req, res) => {
    let calculatedVal = calcMonthlyPayslipDetails(req.body)
    res.send(calculatedVal)
});
module.exports = app;
