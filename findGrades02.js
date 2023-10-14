/* 
Find the grade of your achieved GPA or marks.

0-32        : 'F' Grade
33-49       : 'D' Grade
50-59       : 'C' Grade
60-69       : 'B' Grade
70-79       : 'A' Grade
80-100      : 'A+' Grade
*/

var result = 75;

if (result > 100) {
    console.log("More than 100 is not acceptable.");
}
else if (result <= 100 && result >= 0) {
    if (result >= 0 && result < 33) {
        console.log("You have got 'F' grade.");
    }
    else if (result > 32 && result < 50) {
        console.log("You have got 'D' grade.");
    }
    else if (result > 49 && result < 60) {
        console.log("You have got 'C' grade.");
    }
    else if (result > 59 && result < 70) {
        console.log("You have got 'B' grade.");
    }
    else if (result > 69 && result < 80) {
        console.log("You have got 'A' grade.");
    }
    else {
        console.log("You have got 'A+' grade.");
    }
}
else {
    console.log("Is your result less than 0!!!");
}

// Output || You have got 'A' grade.