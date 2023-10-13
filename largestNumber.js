/* 
You are given three numbers 13, 79 and 45. Write a program that will print the largest number using 'if-else'.
*/


/* 
// Using Multi-stage 'if-else' Conditional: else...else if...else
var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2 && num1 > num3) {
    console.log("The largest number is:", num1);
}
else if (num2 > num3) {
    console.log("The largest number is:", num2);
}
else {
    console.log("The largest number is:", num3);
}

// Output || The largest number is: 79 
*/


/* 
// Using Nested 'if-else' Conditional
var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1, "num1: largest");
    }
    else {
        console.log(num3, "num3: largest");
    }
}
else if (num2 > num3) {
    console.log(num2, "num2: largest");
}
else {
    console.log(num3, "num3: largest");
} 
*/