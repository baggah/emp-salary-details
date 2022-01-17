calcMonthlyPayslipDetails = (reqDetails) => {
    let annualSalary = reqDetails.annualSalary;
    let grossMonthlyIncome = (reqDetails.annualSalary/12).toFixed(2);
    let monthlyIncomeTax = 0;
    if (annualSalary <=20000){
        monthlyIncomeTax = 0;
    } else if(annualSalary > 20000 && annualSalary <= 40000){
        monthlyIncomeTax = ((annualSalary - 20000) * 0.1)/12;
    } else if (annualSalary > 40000 && annualSalary <= 80000){
        monthlyIncomeTax = (2000 + (annualSalary - 40000)*0.2 )/12;
    } else if (annualSalary > 80000 && annualSalary <= 180000){
        monthlyIncomeTax = (2000 + 8000 + (annualSalary - 80000)*0.3 )/12;
    } else if (annualSalary > 180000){
        monthlyIncomeTax = (2000 + 8000 +30000 + (annualSalary - 180000)*0.4 )/12;
    }
    monthlyIncomeTax = monthlyIncomeTax.toFixed(2)
    let netMonthlyIncome = (grossMonthlyIncome - monthlyIncomeTax).toFixed(2);
    let nameStr = `Monthly payslip for: ${reqDetails.name}`;
    let details = {
        name: nameStr,
        grossMonthlyIncome : `$${grossMonthlyIncome}`,
        monthlyIncomeTax : `$${monthlyIncomeTax}`,
        netMonthlyIncome : `$${netMonthlyIncome}`
    }
    return(details);
}