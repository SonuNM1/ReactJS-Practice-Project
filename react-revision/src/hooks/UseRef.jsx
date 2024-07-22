
import React, {useRef, useState } from 'react'

function UseRef() {

    const [name, setName]= useState("Sonu");

    const refElement = useRef() ; 
    // console.log(refElement);

    function Reset(){
        setName("") ; 
        refElement.current.focus() ; // keep the focus on input field even after reset
    }

    function handleInput(){
        refElement.current.style.color="blue"; 
        refElement.current.value="Sonu N Mahto"
    }

  return (
    <>
        <h2>Learning useRef hook</h2>

        <input 
        type="text"
        ref={refElement}
        value={name}
        onChange={(e)=> setName(e.target.value)}
        ></input>

        <button onClick={Reset}>Reset</button> <br/>
        <button onClick={handleInput}>Handle Input</button>
    </>
  )
}

export default UseRef