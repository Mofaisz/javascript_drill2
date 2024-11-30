function averageSalary(data) {
  // Create an object to store roles as keys and an array of salaries as values
  const roleAndSalary = new Object();

  //contains array of object
  employeeInfoArray = data.data;

  //Iterating values of employeeInfoArray (values is in form of object)
  for (let values of employeeInfoArray) {
    // role from the data
    const role = values.hr[0];
    // salary in form of int(removed $ and ,)
    const salary = parseFloat(values.hr[1].replace(/[$,]/g, ""));

    //checks if roleAndSalary object contains that specific role
    if (!roleAndSalary[role]) {
      roleAndSalary[role] = []; //It will add role with an empty array
    }
    // Add the salary to the corresponding role's array
    roleAndSalary[role].push(salary);
  }

  // Create an object to store the average salary for each role
  const roleAndSalaryWithAverage = new Object();

  // Iterate through each role in the roleAndSalary object
  for (let role in roleAndSalary) {
    let sumOfSalary = 0; // Initialize sum for the current role's salaries
    const salaryArray = roleAndSalary[role]; // Get the array of salaries for the role

    // Calculate the total sum of salaries for the role
    for (let perSalary = 0; perSalary < salaryArray.length; perSalary++) {
      sumOfSalary += salaryArray[perSalary];
    }

    // Calculate the average salary for the role
    const averageSalary = sumOfSalary / salaryArray.length;
    // Store the average salary in the result object
    roleAndSalaryWithAverage[role] = averageSalary;
  }

  // Return the object containing average salaries for each role
  return roleAndSalaryWithAverage;
}

// Export the function for use in other files
module.exports = averageSalary;
