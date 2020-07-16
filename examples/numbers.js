// Lesson 22 - Numbers

var a = 5;
var b = 5;

console.log(a + b);

//The output for this particular function will be 10.

//If we were to change one of the variables to a string:

var a = "5";
var b = 5;

console.log(a + b);

//The output will be 55. The reason is "concatonation" which basically smooshes the two items together, rather than adding them.
//If we were to look in the console, we would see that the result of 55 is actuall a string, not a new number. We would know 
//this by seeing that the result comes out in black. A number will come out blue. 

//If we need extra proof that the result is a string and not a number, we can add this line of code to the end:

console.log(typeof (a + b)); 
//This will return the answer "string" in addition to the result of 55.

//------the math object

console.log(Math.round(7.5)); //This function will round the number to the nearest whole number.

console.log(Math.floor(7.8)); //This function will always round the number DOWN to the nearest whole number.

console.log(Math.ceil(7.2)); //This function will always round the number UP to the nearest whole number. (Ceil stands for ceiling).

console.log(Math.max(7, 4, 9, 8)); //This function will always return the largest number. We may need this if users enter numbers.

//------Math will also store constants:

console.log(Math.PI); //This will return the value of Pi.

console.log(Math.squrt(16)); //This will return the square root of a number.

//There are more constants that math stores - easily researchable.