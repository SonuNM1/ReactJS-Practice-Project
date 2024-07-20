
#### ReactJS Concepts

 - props and prop drilling

 - Form Validation
 
 - state
 
 - conditional rendering
 
 - mapping components
 
 - react form
 
 - Ternary operator
 
 - Hooks - useState() , useEffect() , useMemo() , useSelector()
 
 - Memoization
 
 - Custom hooks
 
 - React router
 
 - localstorage
 
 - match-sorter
 
 - sort-byyouute
 
 - Link Vs Navigate
 
 - Redux(store, action, patch, reducers)
 
 - Reducer
 
 - Payload
 
 - Redux Persist
 
 - LocalStorage
 
 - Context API

 - this keyword 

 - ECMAScript6 (Classes; Arrow Functions; Variables like let, var, const; Array methods like .map(), Destructuring, Spread Operator, Ternary operator, Modules) and Babel

- How does React Work? 

- Virtual DOM 

- Current React Version

- The keyword const is a bit misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object
 

- Function Components Vs Class Components 

- React Events 

- e.preventDefault()

- React Forms and Form Validation 

- React router

- React Memo

- React CSS Styling

- Sass (Syntactically Awesome Style Sheets)

- React Hook (useState, useEffect, useContext, useRef, useReducer, useCallback, useMemo, Custom hooks)

- localStorage

LocalStorage is a web storage API provided by browsers that allows you to store key-value pairs in a web browser with no expiration time. It is accessible via JavaScript and can be used to store data persistently across browser sessions. Here's why it's used and its significance:

### Why Store in LocalStorage?

1. **Persistence**:
   - **Session Management**: LocalStorage persists even after the browser is closed. This is useful for maintaining user data (like login status or preferences) across multiple sessions.
   - **State Preservation**: It helps preserve the state of your application. For instance, if a user refreshes the page or comes back later, they don’t lose their data.

2. **Simple API**:
   - The API is straightforward and easy to use, with methods like `setItem`, `getItem`, `removeItem`, and `clear`.

3. **Offline Availability**:
   - Data stored in LocalStorage is available even when the user is offline, making it useful for web applications that need to function without an internet connection.

Using LocalStorage has its pros and cons:

Pros:

1. **Persistence Across Sessions**:
   - As mentioned, data in LocalStorage persists across browser sessions.

2. **Easy to Use**:
   - Simple methods make it easy to store and retrieve data.

3. **Client-Side Storage**:
   - Reduces the need to constantly query a server for data that doesn’t change often, thereby improving performance and user experience.

Cons:

1. **Security Risks**:
   - LocalStorage is accessible from JavaScript, so it can be vulnerable to XSS (Cross-Site Scripting) attacks. Sensitive data (like passwords or personal information) should not be stored in LocalStorage.
   
2. **Storage Limits**:
   - Browsers impose a size limit on LocalStorage (usually around 5MB), so it’s not suitable for storing large amounts of data.

3. **Synchronous API**:
   - All operations on LocalStorage are synchronous, which can potentially block the main thread, leading to performance issues in some scenarios.

### Significance of LocalStorage: 

Improving User Experience - By storing user preferences, themes, or session data, you can create a more seamless and personalized experience.

Caching Data: You can cache data that doesn’t change often, like configuration settings or static resources, reducing server load and improving load times.

State Management: It can be used as a simple state management tool, particularly for small applications that don’t need a more complex solution like Redux or Context API in React.

- React Form Validation (Frontend & Backend)


### JWT (JSON Web Token)


- public, private cryptography in encryption and decryption

- stateless and stateful 

- what is jwt (securely transmitting info b/n parties as a JSON object) ? How is it structured ? 

- header, payload and signature are the three components that make up the token. 

- Authentication (Who are you) Vs. Authorization (What can you do)

- How do you securely store a JWT on the client side? 



