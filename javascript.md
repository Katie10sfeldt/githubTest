# Javascript Tutorial

These are my notes for learning JavaScript

## Day 1 - Intro

I will be learning about how to use javascript to enhace html and css code for web development.
I will be learning javascript syntax, data types (integers, strings, etc.), control flow (loops and conditional statements), and the Document Object Model (DOM).

## Day 2 - What is javascript

Javascript is a language for web design that is used to **ENHANCE** existing html and css - it should be used _only_ to enhance after the website is already functioning without it

- JavaScript adds behavior and interactivity
- JavaScript is a scripting language, not a programing language, meaning it cannot communitcate directly with database or file system on a computer
- Javascript is a "client side" language, meaning it runs on the users browser.
- JavaScript is not, and has nothing to do with JAVA. It was only named that way because JAVA was popular at the time. It's real name is ECMAScript.

## Day 3 - Writing with JavaScript

When writing with JavaScript, to embed it into an html, it must be placed within `<script></script>` tags.
[See Here for Example of Script](https://github.com/Katie10sfeldt/notes-repo/blob/master/examples/javascript.html)

## Day 4 - Where to put your JS

When writing with JavaScript, it is important to remember that the code is read in the browser from TOP to BOTTOM. Be aware of where you are placing your Javascript code.

- When using the script inline with an html code, it is only recommended for SMALL sections of code (1-5 lines or so). Anything larger should be placed in an external file.
  - To link a .js file, it is similar to linking a .css file, except the link does NOT go in the head, but in the body within the `<script></script>` brackets.
        - It would be typed as `<script src="test.js"></script>` (in place of test.js, insert the actual name of the .js file)
- On the external .js file, we don't need the `<script></script>` brackets.

[Here is an example of an html file with JavaScript in-line.](https://github.com/Katie10sfeldt/notes-repo/blob/master/examples/index.html)
[Here is an example of a .js file](https://github.com/Katie10sfeldt/notes-repo/blob/master/examples/hello-world.js) which will show the difference between an external .js file versus an html file with `<script></script>` code.

Both versions work the same, but using an external file can keep the code looking cleaner.

## Day 5 - Google Chrome Developer Tools

- To open developer tools on chrome, press `F12`
- In the **elements tab**, html code will display.
- If there are any links to other files, I can right click and select "Open Link in Resources Panel" which will redirect me to the Resources tab.
  - From the Resources Panel, I can view .js or .css files associated with the website

- **Console Tab**- Within the console tab, I can write JavaScript live, and it will show any errors live as they come up.
- It is used mainly to test JavaScript elements
  - The new code written in the console tab will show you where in line on the code it is located, and if you click it, it will take you to that line of code.
    - Basic math can be completed in the Console tab

- Back in the **elements tab**, I can click the button at the top that looks like `<_`, which will display elements, Console, and style in one screen.

## Day 6 - Basic JavaScript Syntax & Rules

- _JavaScript IS case sensitive_
- Each statement must end with a semicolon `;`
  - Statments are anything that you do (an alert, changing the color of something, changing the position)
  - It is important, because if no semicolon is added, the browser will still be able to perform the first function, but it won't know where to go with the next statement

- Adding comments to JavaScript:
  - A header comment is created with the standard `// comment here`
  - To write multi-line comments on a piece of code is written:
     `/*`
     `code within`
     `*/`

- JavaScript WILL run from top top bottom- in order of how it is written and formatted.

## Day 7 - JavaScript Variables

These following notes can be done in developer tools.

- We define variables with the key word `var`
- you then choose a name for the variable, but the name cannot start with a number. It is then ended with a semicolon: ex. `var myVariable;`
- to then set the variable equal to something, type ex. `myVariable = 10;`
- if setting a variable equal to a word or string, `myVariable = "hello";` it must be within quotation marks.
- This can be done all in one line `var myVariable = "hello";`
- if you call the variable later but just typing `myVariable` and pressing enter, it will return the definition, in this case "hello".
- Once a value for a variable is created, it can be redefined by simply setting it equal to a new value or string.
- When naming variables, it is important to have the names actually meaning something.

*Javascript is a "weakly" typed language, because it does not to be incredibly specific.'*
[See here for comparison to C](https://github.com/Katie10sfeldt/notes-repo/blob/master/js-c.md)

## Day 8 - Basic Mathematical Operators

In Javascript there are 5 common operators:

1. Assignment operator - `var myVar = 5;`
2. Addition
3. Subtraction
4. Multiplication
5. Division

**Addition**

Ex: `5 + 5`

When the function is entered, it should return the sum.

- Variables can be used as well. ex: `myVar + 10` or `myVar = myVar + 10`
  - The second redefines the variable.

- With addition, ONLY, if you were to say something like `5 + "hello"`, it would return `"5hello"`
  - This can also combine 2 strings: ex. `"hello" + " world"` would return `"hello world"`

**Subtraction**

See above, replacing `+` with `-`.

**Multiplication**

Same format as above, using `*` as the action.

- With regards to multiplying a number by a string, or string by a string (as seen with addition) the developer tools should return `NaN`, meaning "not a number".

**Division**

Same format, using `/` to use division.

## Day 9 - Math Operator Short-hand

(Again in the developer tools)

Assigning a value to a variable, there is some shorthand.
For example, when normally we would assign a value by typing:
`var myVar =10`
and then if we wanted to add to it and redefine myVar:
`myVar = myVar + 5` which would return 15.

- This reassigns the value of myVar to 15

For shorthand, we can simply type:
`myVar += 5`
This is the same as the last example above, but a shorter, quicker way to do it.

- This will work with subtraction, division and multiplication.

More shorthand, if we just want to add 1 over and over again, every time we input myVar:
`myVar ++`
This will return a number at an increase of 1 each time. This works for `myVar --` as well

## Day 10 - Logging to the Console

To write a variable to the document (which would be the webpage you are writing for) perform the following:

1. Define your variable.
2. Type `document.write(myVar)` whatever the myVar may stand for.

- This particular method will show the value of myVar in the document.

The most common way to write code is to write it to the console. To do that:

1. Define the variable.
2. Type `console.log(myVar)`

- This particular method will show the value of myVar in the console.

For both `document.write()` and `console.log` it can perform math functions.

## Day 11 - Booleans in JavaScript

Again, this lesson is able to be accomplished in developer tools.

To assign a value to a variable with a boolean expression:

1. Type `var <variable name> = true`: This is not a string. Strings are surrounded by `""`. This is a boolean expression.
2. I can reassign the value to false by typing `<variable name> = false`.

To test the boolean expression, I can type into developer a comparison operator:

- `7 > 5` - This will return true if the program works.
- `7 < 5` - This will return false if the program works.
- `7 = 5` - This will return an error. The reason is because `=` is an assignment operator. To set a number equal to something we must use `==`.
- `7 == 5`- This wll return true.

I can check the boolean value of an individual number using the Boolean key word (built in function).

- `Boolean(7 > 5)` will return `true`
- Any number will return true, even negative numbers.
  - The only number that will return false is `0`.
- If I input a string `Boolean("hello")` will return true, since the string contains something.
  - If the string is empty `Boolean("")` it will return false, since there is nothing in the string.

## Day 12 - If Statements

We use if statements to check if certain conditions are met. For example in a photo gallery "if you click on an image, then the image will be expanded" or "if you click the 'x' on the image, then the image will close".

This particular lesson is written in VS Code, and viewed in developer tools.

To write a portion of JavaScript:

`var youLikeMeat = true;`       //setting value to a variable

`if (youLikeMeat){`
  `document.write("Here is the meaty menu...");`
`}`

- What the above means is that youLikeMeat is true. If youlike meat is true, then the program will print "Here is the meaty menu..." but if it is false, it will not print.

This can be done with math functions, for example:

`var myNum = 10;`

`if (myNum < 10){`
  `document.write("myNum is less than 10");`
`}`

- Something like the above would not print out, since it is false.

We do also have else statements.

`var myNum = 10;`

`if(myNum == 10)`
`{`
  `document.write("myNum is equal to 10");`
`}`
`else`
`{`
  `document.write("myNum is not equal to 10");`
`}`

- In this particular instance, the document will print "myNum is equal to 10" but if we change the value of myNum, it will change the output, due to the else statement.

Else statements can be written with words, like the above "youLikeMeat".

## Day 13 - Else If Statements

This lesson is written in VS code, and viewed on the browser.

Else statements tag along on the back of if statements.

[Click here to see a visual representation](https://github.com/Katie10sfeldt/notes-repo/blob/master/examples/hello-world.js) of an if else structure with accompanying notes.

## Day 14 - Comparison Operators

Comparison operators is an operator that compares two things, variables and a number, or variables and a string. 
For example:

`< less than operator compares two numbers`
`> greater than operator compares two numbers`
`== checks if a variable and number are equal to each other`
`!= check if a variable and number are not equal to each other`
`=== checks if the types of a variable's value and number are the same`
`!== checks if the type of a variable's value and number are not the same`

- What this means is if I assign a value to a variable as a string instead of a number, and compare that variable to a number, it will return false, as the types are not the same.
  - For example if `var x = "5"` and I use the comparison operator `x === 5` the return will be false, since a string is not the same as an integer.