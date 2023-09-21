/* 
You are given an array:
var fruits = ["Apple", "Banana", "Orange"];

a) Find the index of 'Banana' and replace 'Banana' with 'Mango'.
b) Remove 'Orange' and add 'Watermelon'.
*/

var fruits = ["Apple", "Banana", "Orange"];

// Finding the index (position) of 'Banana'
var positionOfBanana = fruits.indexOf("Banana");
console.log("The Index of 'Banana' is:", positionOfBanana);
// Output (a) || The Index of 'Banana' is: 1

// Replacing the 'Banana' with 'Mango'
fruits[1] = "Mango";
console.log("The new array with 'Mango' is:", fruits);
// Output (a) || The new array with 'Mango' is: [ 'Apple', 'Mango', 'Orange' ]

// Removing the 'Orange' from the last of the array using 'Array pop() Method'
var removeOrange = fruits.pop();
console.log("The new array without 'Orange' is:", fruits);
// Output (b) || The new array without 'Orange' is: [ 'Apple', 'Mango' ]

// Adding the 'Watermelon' to the last of the array using 'Array push() Method'
var addWatermelon = fruits.push("Watermelon");
console.log("The new array with 'Watermelon' is:", fruits);
// Output (b) || The new array with 'Watermelon' is: [ 'Apple', 'Mango', 'Watermelon' ]