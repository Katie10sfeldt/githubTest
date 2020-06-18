//Lesson 20 - Functions

function getAverage (a,b) // first we have to specify that this will be a function, then the name of the function,
{                         //Then within the parenthesis, local variables.
    var average = (a + b) / 2;
    console.log(average);
} 
// In this particular function, it will store the result within the variable 'average'.

//This is how you call a function. For example:

getAverage(7,12); //This should output 9.5

//Any additional numbers would be ignored. if we were to write getAverage(7,8,9); it would only accept 7 and 8.

function getAverage (a,b)
{
    var average = (a + b) /2;
    console.log(average);
    return average;
}

var myResult = getAverage(7,8); //This is another example of calling a function.
console.log("The average is " + myResult);

//In the above example, the result of the getAverage function will be stored in myResult and printed.

// You can also include more input:

function getAverage (a, b, c, d, e, f)
{
    var average = (a + b + c + d + e + f) / 6;
    console.log (average);
    return average;
}

var myResult = getAverage (7,8,9,10,11,12);
console.log("The average is " + myResult);

//Last example - The built in function 'alert' is pre-built into JavaScript, but is somewhat set up similarly:

function alert (/*some code*/)
{
    //some code
}

// Lesson 21 - variable scope

function getAverage (a,b)
{
    var average = (a + b) / 2; //Local variable
    console.log(average);
    return average;
}

var myResult = getAverage(7,11); //Global variiable
console.log("The average is " + myResult);

//If we were to attempt to call average outside the function, for example:
console.log(average); //we will get an error.

//Likewise, if we were to call the global variable later:

function logResult()
{
    console.log("the average is " + myResult); 
}

logResult();
//This will not return an error, since the variable was called outside of a function.