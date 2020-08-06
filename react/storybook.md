# React Storybook Tutorial

The React Storybook allows us to create and test components before including them in our application. It allows us to ensure that all items are working properly.

## Setting Up Storybook in Project

Once the react app is created ([See here](https://github.com/Katie10sfeldt/notes-repo/blob/master/react/react.md) for tutorial on how to create a React app), type into command line:
`npx -p @storybook/cli sb init`

To ensure everything is working properly, type:

`yarn test --watchAll` - This will launch the test runner in the terminal with Jest
`yarn storybook` - This will start the component explorer on port 9009
`yarn start` - This will run the frontend app on port 3000.

## Getting Started

When setting up a project, we need a component js file, along with it's accompanying story file: `<example>.js` and `<example>.stories.js`

## Storybook Organization

There are two levels of storybook organization: component and child stories.

A component can contain as many stories as are necessary.

- In the tutorial, the individual stories(states) are built in the `**.stories.js`

## Building the Components

Once the tests are built out, the HTML can be added to the `<example>.js`

## Testing

Once the components are built, they need to be tested.

If we add the Storyshots addon, a test is created for each story. Type:
`yarn add -D @storybook/addon-storyshots react-test-renderer`

Once that is done, we would create a `storybook.test.js` to import and implement storyshots.

Then, `yarn test` can be run

**To follow along with the tutorial, [see here](https://www.learnstorybook.com/intro-to-storybook/react/en/simple-component/)**
