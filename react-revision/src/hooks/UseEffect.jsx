import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [count,setCount] = useState(0) ; 

    useEffect(()=>{
        alert("hey welcome to my page")
    },[])

    function handleClick(){
        setCount(count+1) ;
    }

    useEffect(()=>{
        alert("Count was changed")
    },[count])

  return (
    <>
        <h2>User clicked: {count} times</h2>
        <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default UseEffect