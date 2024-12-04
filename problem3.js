function fullName(data) {
  //Iterating values of data
  const fullNameList = data.map((val) => {
    //store the fullname into fullNameList
    return val.name.join(" ");
  });

  // retuns the list of full name
  return fullNameList;
}

module.exports = fullName; //Exporting the function for further uses
