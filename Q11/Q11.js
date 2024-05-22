// //11.Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// for (let i = 0; i < members.length; i++) {
//   console.log(members[i]);
// }
var friendNames = ["Zeeshan Sharif", "Naveed Ahmed", "Muhammad Tahir"];
for (var i = 0; i < friendNames.length; i++) {
    console.log("Hello My All Friends:", friendNames[i]);
}
friendNames.forEach(function (freinds) { return console.log("Hi my friends:", freinds); });
friendNames.forEach(function (dost) { return console.log("ddff", dost); });
