// function to group people based on their role
function groupByRole(data) {
  //
  if (!data) {
    return null;
  }
  const userByRole = data.reduce((accumulator, initialValue) => {
    // extract the role 
    const role = initialValue.hr[0];
    // extract full name
    const fullName = initialValue.name.join(" ");

    //checks if accumulator already has property or not
    if (!accumulator[role]) {
      // create an empty array for this role
      accumulator[role] = [];
    }
    // appends fullname into the array created for their specific role
    accumulator[role].push(fullName);

    //returns the updated accumulator
    return accumulator;
  }, {});
  if (Object.keys(userByRole).length > 0) {
    return userByRole;
  }
  return null;
}

module.exports = groupByRole;
