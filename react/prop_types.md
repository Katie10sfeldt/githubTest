# Prop Types

## Understanding Props

- Props make it possible to share data across components that need them.
- Data in props normally flows from parent to child, but with callback functions, can go upwards
- Data comes in: numbers, strings, arrays, functions, and objects (+)
- Props can be passed to any component in a similar way that attributes are declared in HTML
- `<PostList posts={postList}/>` in this example, a prop named `posts` is being passed to a component named `PostList`. The prop has a value of `{postList}`

## What Are Prop Types in React

- A mechanism to ensure that components use the correct data type and pass the right data, and that components use the right type of props, and that receiving components receive the right type of props.
- We can pass information to components using props, but in order to check what types of values are being passed, we need propTypes.

### Using PropTypes

- To start, prop types needs to be added as a dependency
  - `yarn add prop-types` should be entered into the command line
- PropTypes then needs to be included on any file that uses it
  - `import PropTypes from 'prop-types';`
- PropTypes are written as an object, for example:
  `Post.proptypes = {`
    `id: PropTypes.number,`
    `content: PropTypes.string,`
    `user: PropTypes.string`
  `}`
- In the example above, `PropTypes.string` and `PropTypes.number` are validators that ensure the props received are the right type
- By adding `.isRequired` to the end of the validator, we can catch bugs (enforcing that a certain key:value pair is included)

- Common PropType validators:
  `stringProp: PropTypes.string`    <!-- The prop should be a string -->
  `numberProp: PropTypes.number`    <!-- The prop should be a number -->
  `anyProp: PropTypes.any`          <!-- The prop can be of any data type -->
  `booleanProp: PropTypes.bool`     <!-- The prop should be a bool (true or false) -->
  `functionProp: PropTypes.func`    <!-- The prop should be a function -->
  `arrayProp: PropTypes.array`      <!-- The prop should be an array -->
  - See more validators [here](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes)

### Default Props

- In cases where Porp Types are optional (not using `isRequired`), we can set `defaultProps` to ensure that props have a value just in case nothing else gets passed
- For example:
`Class Profile extends React.Component{`
  `static defaultProps = {`
    `name: 'Stranger'`
  `};`

  `render() {`
    `return <h2> Welcome, {this.props.name}</h2>`
  `}`
`}`
- In the example above, `defaultProps` ensures that `this.props.name` has a value, even if another name is NOT passed to the class Profile. The function will default to returning `Welcome, Stranger`

**ALWAYS use `defaultProps` for every PropType**
