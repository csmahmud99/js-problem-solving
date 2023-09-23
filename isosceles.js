/* 
You are given a triangle with the sides 9, 8, 9. Write a program to check whether the triangle is Isosceles or not using 'if-else'.

Isosceles => two sides are equal.
*/

var firstSideOfTriangle = 9;
var secondSideOfTriangle = 8;
var thirdSideOfTriangle = 9;

if((firstSideOfTriangle == secondSideOfTriangle) || (firstSideOfTriangle == thirdSideOfTriangle) || (secondSideOfTriangle == thirdSideOfTriangle)) {
    console.log("The triangle is Isosceles");
}
else {
    console.log("The triangle is not Isosceles");
}

// Output || The triangle is Isosceles