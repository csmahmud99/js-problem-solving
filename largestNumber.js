/* 
You are given three numbers 13, 79 and 45. Write a program that will print the largest number using 'if-else'.
*/

var givenFirstNumber = 13;
var givenSecondNumber = 79;
var givenThirdNumber = 45;

if ((givenFirstNumber > givenSecondNumber) && (givenFirstNumber > givenThirdNumber)) {
    console.log("The largest number is:", givenFirstNumber);
}
else if ((givenSecondNumber > givenFirstNumber) && (givenSecondNumber > givenThirdNumber)) {
    console.log("The largest number is:", givenSecondNumber);
}
else {
    console.log("The largest number is:", givenThirdNumber);
}

// Output || The largest number is: 79