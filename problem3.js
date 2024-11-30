function fullNames(data) {
  //contains array of object
  const employeeInfoArray = data.data;
  //initialising empty array to strore fullnames
  const fullNames = [];
  //Iterating values of employeeInfoArray (values is in form of object)
  for (let values of employeeInfoArray) {
    //.join() is used arrays to combine all elements into a single string
    fullNames.push(values.name.join(" ")); //it will form fullName
  }
  return fullNames; //return the answer
}
module.exports = fullNames; //Exporting the function for further uses
