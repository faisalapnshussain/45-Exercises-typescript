// //13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// let favVehicles : string[]=["Sonata","Sportage","Mercedez Benz"];
// for (let i=0; i < favVehicles.length; i++){
//     console.log("I would like to drive a"+" "+ favVehicles[i]);
// };
var favCars = ["Sportage", "Oshan", "Sonata"];
for (var i = 0; i < favCars.length; i++) {
    console.log("I would like to own a ", favCars[i]);
}
favCars.forEach(function (transportation) { return console.log("Would be great if i own", transportation); });
