import { useState,useEffect, React } from 'react';

function State() {

    const [count, setCounter] = useState(0) ; 
    const [data, setData] = useState("Ram") ; 

    useEffect(()=>{
        console.log("Component mounted");
    },[count])

    function updateData(){
        setData("lakshman") ; 
    }

    function updateCount(){
        setCounter(count+1) ; 
    }

  return (
    <>
        <h1>Button clicked: {count} times</h1>
        <button onClick={updateCount}>Click Me</button>
        <button onClick={updateData}>Update Data</button>
    </>
  )
}

export default State