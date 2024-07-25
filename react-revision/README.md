
- Controlled (controlled by react itself) and Uncontrolled Component (useRef, controlled by dom)

- Using e.preventDefault() allows you to manage the form submission yourself. This means you can collect data, validate it, display messages, or send it to a server without the page refreshing.

- props 

stands for properties. Used to transfer data from one component to another. Read-only. Just like parameters in function in javascript. 

- prop drilling, Context API (Create, Provider, Consumer) and useContext hook (create, Provider, useContext)

- is Context API also problematic just like prop drilling ? 

Parent -> Child A -> Child B -> Child C

- name, value and htmlFor (for) attribute in form

- function vs class components

- Lifecycle of class components (mounting, updating and unmounting)

1. Mounting: These methods are called when an instance of a component is being created and inserted into the DOM 

    constructor(), render(), componentDidMount()

2. Updating: These methods are called when a component is being re-rendered as a result of changes to props or state.

    render(), componentDidUpdate()

3. Unmounting: This method is called when a component is being removed from the DOM 

    componentDidUnmount()


- State: built-in react object that is used to contain data or information about the component. 

A state can be modified based on user action or network changes. Everytime when the state of an object changes, React re-render the component to the browser. 

- Rules of Hook: 

1. Must be written inside the function component. 
2. Must be import in component 
3. Must be called at top level of component
4. Cannot be conditional


- Hooks (useState, useEffect, useRef, useCallback, useMemo, useReducer, useSelector)

- useEffect : when the component mounts, used to perform side affects (fetching data, updating the document title DOM, setting up subscriptions, logging to console, accessing local storage) in the application 

- useRef: used to create a mutable ref object that persists across renders. Can be used to access and manipulate DOM elements directly. Can store any mutable value that should persists across renders without causing re-renders. Particularly useful for managing focus, text selection, triggering animation, etc. Interact with DOM directly without causing unnecessary re-renders in our React components. 

- useMemo and Memoization: 

Both are used to optimize performance by caching the results of expensive operations. 

Memoization is a technique used to optimize performance by storing the results of expensive function cals and reusing those results when the same inputs occur again. Helps in avoiding redundant calculations by caching the computed values. 


- useCallback: used to memoize functions. Returns a memoized version of the callback function that only changes if one of the dependencies has changed. 

Useful for optimizing performance, especially when passing callbacks to child components that rely on reference equality to prevent unnecessary re-renders.

When we need to pass a function as a prop to the child component, use 'useCallback' to prevent unnecessary re-renders. 

Purpose: memoizes a function. 

Usage: Used when we want to memoize a function to prevent it from being recreated on every render. 

Return value: Returns the memoized function. 

- useMemo: 

Purpose: Memoizes the result of a function

Usage: used when we want to memoize the result of an expensive calculation to avoid recomputing it on every render

Return value: returns the memoized value 


- useReducer: used for state management. Alternative of useState() hook. Preferable for complex state management logic. 

Syntax: const [state, dispatch] = useReducer(reducer, initialState) ; 

newState = reducer(currentState, action)

- Reducer 

- Custom hooks : named using the 'use' prefix to indicate they follow the rules of hooks. 

Code reusability - extract reusable logic into a custom hook and share it across multiple components. 

- Ternary Operator

- Mapping components, List rendering

- Axios in ReactJS (Yoshita Jain)

- Learn Bootstrap-react

- localStorage: is a way to store data in a user's web browser. It's like a small database in the browser that allows you to save key-value pairs. 

In a React component, you can use LocalStorage to store state that persists even after the user refreshes the page.

Persistence: Data stored in LocalStorage remains available even after the browser is closed and reopened. This allows applications to save user settings, preferences, and state without requiring a server-side database.

Performance: Storing data locally reduces the need to fetch data from a remote server, which can improve the performance and responsiveness of an application. This is particularly useful for frequently accessed data.

Offline Access: LocalStorage enables web applications to function offline by storing necessary data locally. Users can continue interacting with the application without an internet connection, and the data can be synchronized with the server when connectivity is restored.

### React Router 


- BrowserRouter -> Routes -> Route -> Link -> useNavigate 

- pass data from one component to another component using useNavigate. Why is it used ? 

- useLocation


### React Redux (Store, Action, Reducer, Dispatch)


- Redux is a library for JavaScript Applications. Used together to manage the state of complex applications. 

Redux is a predictable (track the state management) state container for JavaScript apps (Angular, Vue) which helps us write applications that behave consistently across different environments (client, server, and native). 

1. State - holds the state of our application

2. Action - object that describes what happened. Defines the actions. 

Actions are JavaScript object that contains information. Actions are the only source of information for the store. It only tells us what has happened. 

Actions have a type property and it should be defined in string constraint. 

It is compulsory to include the 'type property' in the object. 

3. Reducer - a function that determines how the state changes in response to an action. Defines how state changes. Carries out state transition depending on the action. 

reducer(currentState, action) => newState

Reducers decides how the state of application changes depending upon the action send to the store. 

Reducers are the function that accepts state and action as parameter and returns the next state of the applicton 

4. Dispatch - Sends an action to the store. 

5. Store - holds state of our application 

Entire application contains single store. It is responsible for holding application state. 

getState() method gives access to state it holds. 

dispatch(action) method allows state to be updated. 

subscribe(listener) method, by which we can register listeners 

- Real-life example of Redux: 

State - holds the items in the cart and the total quantity

Action - represents actions like adding an item, removing an item, and cleaning the cart 

Reducer - defines how the state changes based on actions 

Dispatch - sends action to the store 

Store - holds the entire state of the shopping cart 

- Rules of Redux: 

1. The state of our application is stored in an object tree within a single store 

{
    NumberOfBooks: 10
}

2. Only way to change the state is to emit an action, an object describing what happened. 

{
    Type: "buyBook"
}

3. To specify how the state tree is transformed by actions, we write pure reducer. 

- useSelector: is a hook that react-redux library provides to get hold of any state that is maintained in the redux store. 

Allows us to extract data from the Redux store state. Used within function components to access the Redux state and subscribe to changes. 


- useDispatch 

useSelector is used to access state from the redux store. 

useDispatch is used to dispatch actions to the redux store. 



### React Redux Toolkit (RTK) Query