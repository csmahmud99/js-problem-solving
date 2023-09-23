/* 
You are in a hurry to go to your school. But while you are trying to cross the road, you can see that the color of the traffic signal is red; in this situation, if you try to cross the road, it cam be a danger for you. If the color of the traffic signal is yellow, then you should stop if you are trying to take the attempt to cross the road and wait. And if the color of the traffic signal is green, then you should try to cross the road.

Now, write a code where we have a variable named 'signal'; it's value can be green, yellow or red; and according to different colors different tasks will be done.
*/

var signal; // Variable is declared, but not defined; it's value can be green/yellow/red

if(signal == "red") {
    console.log("I won't cross the road; it can be dangerous for me");
}
else if(signal == "yellow") {
    console.log("Trying to take an attempt to cross the road, but I should stop and wait");
}
else if(signal == "green") {
    console.log("I should cross the road");
}

// Output || The output of this program will depend on the value (green/yellow/red) of the variable 'signal'; which value will be defined, according to that the output will come.