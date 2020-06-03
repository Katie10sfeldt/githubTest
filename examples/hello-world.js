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
