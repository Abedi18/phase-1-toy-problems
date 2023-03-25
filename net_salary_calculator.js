function calculateNetSalary(basicSalary, benefits) {
    const PAYEE_PERCENTAGE = 0.1;
    const NHIF_PERCENTAGE = 0.02;
    const NSSF_PERCENTAGE = 0.06;
    
    // Calculate Gross Salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate PAYEE
    const payee = grossSalary * PAYEE_PERCENTAGE;
  
    // Calculate NHIF Deductions
    const nhifDeductions = grossSalary * NHIF_PERCENTAGE;
  
    // Calculate NSSF Deductions
    const nssfDeductions = grossSalary * NSSF_PERCENTAGE;
  
    // Calculate Net Salary
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
  
    // Return all the calculated values
    return {
      grossSalary,
      payee,
      nhifDeductions,
      nssfDeductions,
      netSalary,
    };
  }
  
  // Example usage
  const salaryDetails = calculateNetSalary(50000, 10000);
  console.log(salaryDetails);
 
  



  
  



  
  
  
 


