// function for average salary based on the specific role
function averageSalary(data) {
  //checks for falsy values
  if (!data) {
    return null;
  }
  //initializes an object to store key as role and value as array of salaries
  let roleAndSalary = {};

  // Iterates over each elements of data
  data.forEach((element) => {
    // Extracts the role
    let role = element.hr[0];
    // Extracts the salary and removing the $ and ,
    let salary = parseFloat(element.hr[1].replace(/[$,]/g, ""));

    // If the role doesn't exist it will initialize role as key and value as empty array
    if (!roleAndSalary[role]) {
      roleAndSalary[role] = [];
    }
    // if it is already initializes ,pushing the salary into array of roleAndObjects
    roleAndSalary[role].push(salary);
  });

  // for calculating the average salary for each role and store it into new object
  const roleAndSalaryWithAverage = Object.entries(roleAndSalary).reduce(
    (accumulator, [role, salary]) => {
      // calculates the average salary for specific role
      const average_salary = salary.reduce((accu, sal) => {
        return (accu + sal) / salary.length;
      }, 0);
      //stores the average salary for their role
      accumulator[role] = average_salary;
      return accumulator;
    },
    {}
  );
  return roleAndSalaryWithAverage;
}
module.exports = averageSalary; // Exporting the function for further use
