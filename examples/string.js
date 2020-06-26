//---------------------------------Properties of strings:-------------------------

//---String Length:
var myString = 'I\'m a "fun" string';

console.log(myString.length); //This will output the number of characters in a string in case we want to perform some function.

//---Upper case:

var myString = 'I\'m a "fun" string';

console.log(myString.toUpperCase());//This will output all characters as upper case

//---Lower case:

var myString = 'I\'m a "fun" string';

console.log(myString.toLowerCase());//This will output all characters as lower case

//---Index:

var myString = 'I\'m a "fun" string';

console.log(myString.indexOf("string"));//This will search for a particular word or character within the string.
//The output will be the number of spaces within the string until the word or character starts (in this case, 12)
//If the word or character does not exist in the string, the output is "-1". 
//For example:

var myString = 'I\'m a "fun" string';

if (myString.indexOf("ninja") === -1)
{
    console.log ("The word 'ninja' is not in the string"); //This will output this line of code, as ninja is not in the string
}

// We can also add an else line:

var myString = 'I\'m a "fun" string';

if (myString.indexOf("ninja") === -1)
{
    console.log ("The word 'ninja' is not in the string"); //This will output this line of code, as ninja is not in the string
}
else
{
    console.log("The word 'ninja' begins at position " + myString.indexOf("ninja"));
}

//--------------------------------Math and Strings--------------------------------------

var string1 = "abc";
var string2 = "bcd";

console.log (string1 === string2);  //The output here is 'false'

//--------If we were instead to write: 
var string1 = "abc";
var string2 = "abc";

console.log (string1 === string2);  //The output here is 'true'

//--------If we were instead to write: 
var string1 = "abc";
var string2 = "ABC";

console.log (string1 === string2);  //The output here is 'false' - Items ARE case sensitive.

//--------If we were instead to write: 
var string1 = "abc";
var string2 = "ABC";

console.log (string1.toLowerCase() === string2.toLowerCase());  //The output here is 'True' if we don't care about case sensitive.

//--------Another example:
var string1 = "abc";
var string2 = "bcd";

console.log(string1 < string2); //The output here is true - A comes before B in the alphabet (is a lower number).

///NOTE - UPPER CASE LETTERS ARE CONSIDERED A LOWER NUMBER THAN LOWER CASE LETTERS!!!!!

//--------------------------------- Day 25 - Slicing and Splitting strings:-------------------------

//----The following would be used if we wanted to slice a string (for whatever reason) into different parts.

var str = "hello, world"; //We sset the variable str equal to a string.

var str2 = str.slice(2,9); //We choose which characters we want the slice to start and stop at.

//Note, JavaScript starts at 0 to count. We choose character 2 as the start point and 9 as the stop point.
//In this case, the output of the str2 variable will be "llo, wo"

var str3 = str.slice(2); //In this case, we only choose one point - the starting point.
//The output for this variable will be "llo, world".

//----The following would be used if we wanted to split a string (for whatever reason) into different parts.
//In this example, we use a practical application of tags in a blog, where it asks to separate tags with a comma.

var tags = "meant, ham, salami, pork, beef, chicken";

var tagsArray = tags.split(","); //This will split the tags into a different item every time it sees a comma and create an array.
//When the variable is called, the output will look like this:

["meat", " ham", " salami", " pork", " beef", " chicken"]
