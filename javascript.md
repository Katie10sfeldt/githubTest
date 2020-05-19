# Javascript Tutorial
These are my notes for learning JavaScript

## Day 1 - Intro
I will be learning about how to use javascript to enhace html and css code for web development.
I will be learning javascript syntax, data types (integers, strings, etc.), control flow (loops and conditional statements), and the Document Object Model (DOM).

## Day 2 - What is javascript?
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
