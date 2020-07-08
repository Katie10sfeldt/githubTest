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

- `< less than operator compares two numbers`
- `> greater than operator compares two numbers`
- `== checks if a variable and number are equal to each other`
- `!= check if a variable and number are not equal to each other`
- `=== checks if the types of a variable's value and number are the same`
- `!== checks if the type of a variable's value and number are not the same`

- What this means is if I assign a value to a variable as a string instead of a number, and compare that variable to a number, it will return false, as the types are not the same.
  - For example if `var x = "5"` and I use the comparison operator `x === 5` the return will be false, since a string is not the same as an integer.

## Day 15 - Logical Operators

Used to check if multiple conditions are true.

- `&&` stands for and. A variable must meet both conditions. [See here line 43](https://github.com/Katie10sfeldt/notes-repo/blob/master/examples/hello-world.js) for an example.
- `||` stands for or. A variable must be true in either of the two conditions. [See here line 57](https://github.com/Katie10sfeldt/notes-repo/blob/master/examples/hello-world.js) for an example.

For either of the logical operators, you can have more than two conditions. You can have as many as you would like.

## Day 16 - While Loops

While loops work depending on a condition.

While is set up in a similar way to if and else.

- When creating a while loop, we have to be careful not to create an infinite loop, otherwise, the browser will crash. See hello-world.js line 69 for an example [Click here](https://github.com/Katie10sfeldt/notes-repo/blob/master/examples/hello-world.js)
- Instead, create a condition that changes the variable within the loop, so that the loop does not continue running forever. (Also an example in the .js file).

## Day 17 - For Loops

While loops contain 3 components: the Index Variable (the initial variable), the Condition (while something is true), and the Incrementer.

The variable that increases each time the code loops is called the Index Variable.

For loops break down the 3 components that are in the while loop in to a much simpler format. [See here line 89 for an example](https://github.com/Katie10sfeldt/notes-repo/blob/master/examples/hello-world.js)

## Day 18 - Break and Continue

Breaks are used to 'break out' of a loop. This is done by checking a certain condition before a loop would normally stop to break the loop.

Continue is similar to break, but it doesn't completely break out of the loop, it only stops the loop for a particular instance, and then continues after.

[See examples of each in line 99](https://github.com/Katie10sfeldt/notes-repo/blob/master/examples/hello-world.js) hello-world.js.

## Day 19 - Practical Example Using Loops

[See examples in loops.js](https://github.com/Katie10sfeldt/notes-repo/blob/master/examples/loops.js) of practical examples for loops.

## Day 20 - Functions

Functions group logical sections of code together so that you can "call" that function when needed.

[See functions.js for samples.](https://github.com/Katie10sfeldt/notes-repo/blob/master/examples/functions.js)

- Functions cannot start with a number!

## Day 21 - Variable Scope

Two types of scope: Local and Global

Global: declared outside of any function (at the top of a JavaScript file). This means it can be used anywhere in the code.

Local: declared within an individual function. It can only be used within the function.

[See examples of each in the functions.js file.](https://github.com/Katie10sfeldt/notes-repo/blob/master/examples/functions.js)

NOTE**Global variables are to be avoided if at all possible. They make things easier early on, but as the code grows, they increase complexity and but potential significantly

## Day 22 - Numbers

In other languages, when setting a variable equal to a number, we must specify the type of number. In JavaScript, there is no need to do that. You simply write what number you need.

No numbers should be surrounded by "", because it will turn the number into a string, as opposed to a number.

- Like in previous videos, we have seen comparing variables to string numbers.
- [See numbers.js](https://github.com/Katie10sfeldt/notes-repo/blob/master/examples/numbers.js) for samples of math functions.

[See here](https://www.w3schools.com/jsref/jsref_obj_math.asp) for more examples of math functions.

## Day 23 - NaN (Not a Number)

In relation to the previous lesson, if we try to multiply a number inside "" by a number, it will return a numerical value, only because JavaScript is trying to be helpful.

However, if we were to try and multiply a number by "apple" the program will return "NaN" meaning not a number.

This is useful if we are trying to determine if some input is a number when it should be.

See an application of this in [nan.js](https://github.com/Katie10sfeldt/notes-repo/blob/master/examples/nan.js)

## Day 24 - Strings

Strings are initialized by placing them in quotes. It usually contains more than one word, but can consist of just one word.

Syntax:

- Normal string:
  - `I am a fun string`
- If I want it to contain quotation marks within the string:
  - `'I am a "fun" string';`
  - NOTE: If I were to type `"I am a "fun" string"` the string would be cancelled out when it reached the "fun".
- If I want a string to contain an apostrophe:
  - `'I\'m a "fun" string';`
  - NOTE: If I were to type `'I'm a "fun" string';` the string would be cancelled out when it reached 'm

Properties:

- See [string.js](https://github.com/Katie10sfeldt/notes-repo/blob/master/examples/string.js) for examples of properties

## Day 25 - Slice and Split Strings

See [string.js](https://github.com/Katie10sfeldt/notes-repo/blob/master/examples/string.js) for notes and examples on slice and split.

See [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) for more info on strings.

## Day 26 - Arrays

An array is multiple values stored within a single vairable.

Arrays are defined with `[]`

Unlike in C, but similarly to Python, arrays in Javascript can hold values of different types (numbers, bools and strings).

See [array.js](https://github.com/Katie10sfeldt/notes-repo/blob/master/examples/array.js) for examples

## Day 27 - Intro to Objects

Objects: Strings, numbers, arrays, plus many more! <--These are all objects!>

Methods: End with () - These are functions that are run on a variable's value

- In strings, we can make all letters uppercase or lowercase
- In arrays, they can be sorted
- Numbers can have mathematical functions run on them

Properties: Do not end with (). These only extract information from the object.

- Properties can determine length of an object, or other such features.

## Day 28 -  Creating a New Object

See [objects.js](https://github.com/Katie10sfeldt/notes-repo/blob/master/examples/objects.js) for examples on creating new objects

## Day 29 - THIS Keyword

See more notes continueing in the [objects.js](https://github.com/Katie10sfeldt/notes-repo/blob/master/examples/objects.js) file.

## Day 30 - Constructor Functions

Constructor functions create objects for us.

See [objects.js](https://github.com/Katie10sfeldt/notes-repo/blob/master/examples/objects.js) for examples on constructor functions.
