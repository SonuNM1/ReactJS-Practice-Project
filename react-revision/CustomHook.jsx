import React from 'react';
import useCounter from './src/Custom hook/useCounter';

function CustomHook() {

   const [count, Increment, Decrement] = useCounter() ; 

  return (
    <div>
        <div>{count}</div>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default CustomHook