var myArray = []; //Initializing the variable myArray

myArray[0] = 25         //JavaScript is a 0 based language, meaning when it counts, we start at 0. This sets the 0th position in the array equal to 25.
myArray[1] = 35         //The 1 position is set equal to 35
myArray[2] = true       //The 2 position is set equal to true (boolean)
myArray[3] = "hello"    //The 3 position is set equal to "hello" (string)

//When the variable myArray is called, it will print as:
[25, 35, true, "hello"]

//To change the value of a place in an array, all we have to do is type:

myArray[2] = false

//Here is the shorthand way to right the above:

var myArray2 = [10, 20, "hi", false];

//Another way to right it:

var myArray3 = new Array(5) //What this does is creates a new array called myArray3 with 5 places.

//Using the length property:

myArray2.length     //by typing this in, it should print out 4. It prints based off of the number of spaces in the array that are filled.

//Sorting:

myArray2.sort()       //This will return  [10, 20, false, "hi"]

myArray2.reverse()   //This will sort in the reverse: ["hi", false, 20, 10]

