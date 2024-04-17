# Complete Developer

- node.js
- express.js
- npm
- JavaScript
  - ES.Next modules
- TypeScript
- ReactJs

## Modern JavaScript

- var, let, const
  - var gets hoisted
    - var variables are also added to the window global object
    - let and const con only be referenced inside the same block they are defined or inside child blocks

- Arrow functions
  - When called, the surrounding determines the scope
- Strings
  - `tagged` template literals
    - Create a [[DSL]] (domain specific language in js)
  - `untagged` template literals
- Promises
  - Have two  properties
    - state
    - result
  - We can use `then()`, `catch()` and `finally()` to handle them
- Avoid using `callbacks`, use `async/await`
- `...` operator
  - It expands the values of an array, it copies its content to variables that allocate its own memory

## TypeScript

- All valid JavaScript is valid TypeScript
- Issues with JavaScript
  - Dynamically typed
  - Weakly typed
    - It converts variables to their most plausible values
- `TSC` is used to *transpile* javascript
  - Doesn't produce low level code
  - Converts code into an equivalent abstraction
  - It always produces javascript unless the typescript code has an error
- 3 scenarios where annotating types makes sense
  - Variables
    - Over-typing, not recommended
  - Function's return values
    - Important to add
  - Function's parameters
    - This is the truly important one
- Available types
  - Primitives
    - integer
    - string
    - boolean
    - null
    - underfined
  - Arrays
    - `number[]`
    - `string[]`
  - Tuples
    - `[string, number]`
  - Union
    - `string | integer`
  - Any
    - Should be avoid d as it doesn't really help us solve the issue of defining clear contracts or interfaces
  - Void
    - Use to indicate that a function does not have a return type
- `ts` files without *top level* imports or exports run on the global scope
  - Otherwise, they are limited to the module scope
- Use this repo to add types to external npm modules
  - [DefinitelyTyped](https://definitelytyped.github.io/)
  - e.g. `npm install --save-dev @types/express`

> [!important] To learn more about TypeScript
> [typescript tutorial](https://www.typescripttutorial.net/)

## ReactJs

- Primarily a user interface library
  - Can be used to build a single-page app with reactive features without the need to call a backend
- Works with a virtual DOM that updates in batches by comparing it with the real one
- ReactDOM package gives us access to APIs to work with the DOM

### Inner workings

- Components
  - Class
  - Function
- Lifecycle methods
- Hooks
  - Functions that offer a simple an reusable interface to state and lifecycle features
  - `useState` is equivalent to `this.state`
  - `useEffect` is equivalent to `componentDidMount`
  - There are multiple hooks available, and the react documentation provides a great guide as to how to use them
