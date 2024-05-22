//12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.


//Exercise 11.

// let members : string[]= ["Hunaina", "Hadid","Ayesha","Bismil","Shahmeer"];

// for (let i=0; i<members.length; i++){
//     console.log(members[i]);
// };

//Exercise 12.

 let friendNames : string[]= ["Zeeshan Sharif", "Naveed Ahmed","Muhammad Tahir"];
 let message: string = "How are you my friends, Glad to See you";
 for (let i=0; i < friendNames.length; i++){
     console.log(message, friendNames[i]);
};
friendNames.forEach(msg => console.log(`${message}`, msg));
