import React, { useState } from 'react'
import './style/Two.css'; 

function Two() {

  const [count, setCount] = useState(0); 

  return (
    <div className='counter-container' >
        <button 
        onClick={()=>setCount(count+1)} >Increment +          
        </button>
        <span>{count}</span>
        <button onClick={()=>setCount(count-1)} >Decrement -</button>
    </div>
  )
}

export default Two