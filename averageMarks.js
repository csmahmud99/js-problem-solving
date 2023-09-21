/* 
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics and Bangla of a student.
====================================================================================
Input:
The first line of the input is the marks if the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places:
Sample Input    : 75.25, 65, 80, 35.45, 99.50
Output          : 71.04
*/

var marksOfMathematics = 75.25, marksOfBiology = 65, marksOfChemistry = 80, marksOfPhysics = 35.45, marksOfBangla = 99.50;

var addMarks = marksOfMathematics + marksOfBiology + marksOfChemistry + marksOfPhysics + marksOfBangla;

var averageMarks = addMarks / 5;

console.log("The average mark is:", averageMarks);

// Using the method 'toFixed()'
var averageMarksToFixed = averageMarks.toFixed(2); 

// Using 'parseFloat()' method for getting the numeric value from the string value
console.log("The average marks is (in 2 decimal places):", parseFloat(averageMarksToFixed)); 

// Final Output || The average marks is (in 2 decimal places): 71.04