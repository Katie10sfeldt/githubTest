var a = "apple";
var b = 5;

if (isNaN(a)) //this means, if a is not a number
{
    console.log("that's not a number!");
}
else
{
    console.log("meaning of life is " + (a * b));
}
//This entire section of code would require input from a user. If they do not input a number, it will return
//to the user to try again.

//As a note, we can have a double negative:

if (!isNaN(a)); //This means if a is not not a number... be careful when inputing the if statement with NaN.