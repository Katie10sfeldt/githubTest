//On an external .js file, this is how the code will look:

alert("Hello, World!");

//If using the external .js file, within the body of the html, you must include:
<script src="hello-world.js"></script>

//On an html file with the JavaScript in the code, it will be within <script></script> brackets:


<body>

  <h1>Hello, World!</h1>

  <script>
    alert("Hello, World!");
  </script>

</body>

//This particular next section relates to lesson 13 of javascript.md (else if statements)

var myAge = 26;  //the particular output of the code will depend on what the value of the variable myAge is.

if (myAge > 27) //the code takes the value of the variable and first compares it to the if statement. 
{
  document.write("you are over 27!"); //if the value matches the critera, it will write what is in quotes here.
}
else if (myAge > 20) //if the value of the variable does not match the first statement, it moves to the next else statement.
{
  document.write("you are over 20!"); //the process is repeated for as often as the value of the variable does not match.
}
else if(myAge > 10)
{
  document.write("you are over 10!");
}
else{
  document.write("you are not over 10!"); //until eventually the value finds an if else statement it matches with.
}

//the lone else in this case shows that any other value that does not match the first 3 qualifiers, will result in the output "you are not over 10!".

//Logical Operators
  //&&, 'and'

var myAge = 25;

if (myAge >= 18 && myAge <= 30) //the variable's value must be both over 18 and less than 30
{
  document.write("You can come!"); //In this case, the age is 25, which means they can come.
}
else //If the value of myAge were 18 or younger or 30 and over, the program would print "You can't come!"
{
  document.write("You can't come!");
}

  //||, 'or'

var myAge = 35;

if (myAge < 18 || myAge > 30)
{
  document.write("You can't come!");
}
else{
  document.write("You can come!");
}

// WHILE LOOPS

var age = 5;

while (age < 10)
{
  console.log("Your age is less than 10");
}//This particular case does nothing to ever stop the loop. The variable will always be equal to 5, and therefore will continuously return this response.
document.write("You are now over 10!");//Running an infinite loop on a browser can crash the page, so be careful!

//Instead, try:
var age = 5;

while (age < 10)
{
  console.log("Your age is less than 10");
  age++//This tells the system that every time the code loops, add 1 to the variable. Eventually the program will stop when it reaches a value of 10.
}
document.write("You are now over 10!");

//FOR LOOPS

//the following does the same thing as the while loop above:

for (age = 5; age < 10; age++) //This can also be written with age replaced with i or some other variable.
{
  console.log("Your age is less than 10");
}
document.write("You are now over 10");

//BREAKS AND CONTINUE

//----Break

for (i = 0; i < 10; i++)
{
  console.log(i);
  
  if(i === 7) // This particular bit of code starts a counting loop from 0. 
  {
    break; // When the loop reaches 7, it will break out...
  }
}
console.log("I have broken out of the loop"); //And jump to here and return this phrase.

//----Continue

for (i = 0; i < 10; i++)
{
  if (i === 5 || i === 3) // In this instance, continue is a weak break.
  {
    continue; // When the count reaches 3 and 5, it basically skips them and continues the loop around them. 
  }
  console.log(i);

  if(i === 7)
  {
    break;
  }
}
console.log("I have broken out of the loop");