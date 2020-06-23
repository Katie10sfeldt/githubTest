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