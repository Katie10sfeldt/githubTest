# React Tutorial notes

## What is React

- React is a JavaScript library (not a framework)

## Thinking in React Component

- Each element on a web page is considered a component.
- When building with React, each element is built as independent/ isolated/ reusable components
- Used similarly to how a function would be called: they can be called with some input and render some output, and can be merged with other components to create a complex user interface.
- The parent component holds all of the other components (child/children components).

## The Concept of Virtual DOM

The DOM (Document Object Model)

- an interface that allows JavaScript or other scripts to read and manipulate the content of a document (in this case, and HTML document).
- In the simplest terms, it is an object-based representation of an HTML document. Visually, it is represented as a tree chart.

When using the DOM, every time it changes, the browser needs to recalculate the CSS and re-run the full page. This is where we use the **Virtual DOM**.

Virtual DOM

- It is a virtual representation of the actual DOM. It uses a strategy that updates the DOM without having to re-render all of the webpage elements.
- The DOM only receives necessary data to repaint the UI.
- Whenever a new element is added, a virtual DOM is created. If the state of that element changes, a second virtual DOM is created, and is compared with the previous version to detect which object has changed, then ONLY the the object on the real DOM is updated.

## Setting up Working Environment: Writing React Directly in HTML

- Create an `index.html` file.
- In the head, include 3 script files - CDN for React, ReactDOM, and Babel
- Within the body, create a `<div></div>` with an `id="root"` (just as an example of where the application will live)
- In the body, create a script element where the React code is written:

`<script type="text/babel">
    const element = <h1>Hello from React </h1>;
    console.log(element);
</script>`

- When writing type, including babel is important for it to work.
- The line above `const element = <h1>Hello from React</h1>;` may look like HTMl, but in this instance, it is actually JSX

## What is JSX

- JSX (JavaScript XML) is an XML-like syntax extension to JavaSCript that makes it easier and more intuitive to descript UI
- JSX is being translated to vanilla JavaScript under the hood so the browser can read it at run time.

How it works:

- JSX is passed to Babel(JavaScript compiler) which converts it to plain JavaScript.
- Babel also changes JavaScript ES6 features into what older browsers will recognize. (ex. `const` is changed to `var`)

Notes:

- You can use a valid JavaScript expression inside the JSX through curly braces, `{}`.
- In JSX, elements attributes, event handlers are always in camelCase. The few exceptions are `aria-*` and `data-*` attributes, which are lowercase.

Using this example:

`<script type="text/babel">
    const element = <h1>Hello from React </h1>;
    ReactDOM.render(element, document.getElementById("root"));
</script>`

- The first argument of `render()` method defines what you want to render while the second defines where you want it rendered.
  - In simple language, render will render the `<h1>` element in the `<div>` with the ID `"root"`.
- When the browser is loaded, it should show the H1 element.

## Using Create React App CLI

See section below on initializing the app project to begin.

- Once your files are created, in the text editor, there should be a large number of files already created.
  - `node-modules` contains all third party libraries, React, and packages that are installed through npm.
  - `public` folder contains public asset of the application, and is where static files reside (`index.html`)
  - `src` folder contains working files (`index.js`)
  - `package.json` contains info about the app. It has dependencies of libraries that are currently installed

## Comand Line Functions to put in the terminal to create the React App

Before starting:

1. install node to have access to npm, then check your version
`node -v` - should be version 8.10 or higher
`npm -v` - should be version 5.2 or higher

After installing Nodejs:

1. `npx create-react-app <app-name>` - will create a folder for the app
2. `cd <app-name>` - navigate to directory for project folder
3. `npm start` - launches the development server on port 3000 and a new browser window displaying the application will appear automatically. **Note:** If nothing happens, visit the URL `localhost:3000`

An image of the React logo should appear in the browser to indicate that the server is up and running.
