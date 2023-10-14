/* 
Check if the value of the variable named 'number' is 30 or, not; if it is 30, then check if its data type is 'string' or not. If it is '30' and 'string', then she output, otherwise show the text 'Nothing'.
*/

var number = 30;

if (number == 30) {
    if (typeof number == "string") {
        console.log("All OK");
    }
    else {
        console.log("Number = 30, but not 'string'");
    }
}
else {
    console.log("Nothing");
}

// Output || Number = 30, but not 'string'