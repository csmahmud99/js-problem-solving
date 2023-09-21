/* 
Problem Description: 
Harry's mom gave him money and asked him to buy some oranges and apples. 

Write a program to help Harry calculating how much money the shopkeeper will return.
======================================================================================
Input: 
The first line of the input is the taka Harry's mom gave him.
The second line is the cost of 1kg of oranges and 1kg of apples.

Output:
Print the result:
-- Sample Input    : 1000 || 700
-- Output          : 300
*/

var givenMoney = 1000;
var fruitPrice = 700;

var returnMoney = givenMoney - fruitPrice;

console.log("The shopkeeper will return:", returnMoney);

// Final Output || The shopkeeper will return: 300