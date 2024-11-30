function groupByRole(data) {
  //checks for all falsy values
  if (!data || !data.data) {
    return null;
  }
  //Initialising an empty objects
  roleAndName = new Object();
  //employeeInfoArray contains array of object
  const employeeInfoArray = data.data;
  //Iterating values of employeeInfoArray (values is in form of object)
  for (let values of employeeInfoArray) {
    const role = values.hr[0];
    const fullName = values.name.join(" "); //It will contain concatenation of names array basically full name

    if (!roleAndName[role]) {
      //checks if roleAndName object contains that specific role
      roleAndName[role] = []; //It will add role with an empty array
    }
    roleAndName[role].push(fullName); // push fullname on array with matching role
  }
  if (Object.keys(roleAndName).length > 0) {
    return roleAndName; //return the result if it has some keys
  } else {
    return null; //return null if objects doesn't contain anything.
  }
}
module.exports = groupByRole;
