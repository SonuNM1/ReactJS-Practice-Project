
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


- Hooks (useState, useEffect, useRef, useCallback, useMemo, useSelector)

- useEffect : when the component mounts, used to perform side affects (fetching data, updating the document title DOM, setting up subscriptions, logging to console, accessing local storage) in the application 

- useRef: used to create a mutable ref object that persists across renders. Can be used to access and manipulate DOM elements directly. Can store any mutable value that should persists across renders without causing re-renders. Particularly useful for managing focus, text selection, triggering animation, etc. Interact with DOM directly without causing unnecessary re-renders in our React components. 

- useMemo and Memoization: 

Both are used to optimize performance by caching the results of expensive operations. 

Memoization is a technique used to optimize performance by storing the results of expensive function cals and reusing those results when the same inputs occur again. Helps in avoiding redundant calculations by caching the computed values. 

