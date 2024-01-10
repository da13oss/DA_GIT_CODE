// An Array is a data structure that stores information in between these brackets []
var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"]


//Adding items:
// You can add items like Jello using the push command
var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"]
user.push("Jello");
console.log(user); // Looks like this ["Dwight", "Schrute", "beetsbears@battlestar.com", "Jello"]

//Removing items:
// Using the Pop method you can remove values
var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];
console.log(user[0]); // reading the value -- OUTPUT: Dwight
user[1] = "Martin"; // updating the value
console.log(user); // ["Dwight", "Martin", "beetsbears@battlestar.com"]

//Access/Update:
//To access or update values in an array, use INDEX NUMBER, with the first being 0
var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];
console.log(user[0]); // reading thevalue -- OUTPUT: Dwight
user[1] = "Martin"; // updating the value
console.log(user);  // ["Dwight", "Martin", "beetsbears@battlestar.com"]

//Length of Arrays:
// Tells you how many values are in an array
var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];
console.log(user.length); //3
user.pop();
console.log(user.length); //2