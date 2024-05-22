//3. Name Case: Store a person's name in a variable, and then print that's person's name in lowercase, uppercase, and tittlecase.
var personName = "Quaid -e- Azam Muhammad Ali Jinnah";
console.log("Person's Name in lowerCase:", personName.toLowerCase());
console.log("Person's Name in UpperCase:", personName.toUpperCase());
console.log("Person Name if Title Case:", personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
