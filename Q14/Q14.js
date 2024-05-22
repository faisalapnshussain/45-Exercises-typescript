// //14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// let guestList: string[] = ["Ayesha", "Komal", "Eman", "Shanzy"];
// guestList.forEach((oneGuest) =>
//   console.log(
//     `Assalama-o-alikum ${oneGuest}, would you like to dinner with me?`
//   )
// );
var myguestlist = ["Ayesha", "Alina", "Saba", "Shahnila"];
myguestlist.forEach(function (oneguest) {
    return console.log("Hello My Dear ".concat(oneguest, " can you please let me know the your availblity to attend a dinner with me"));
});
