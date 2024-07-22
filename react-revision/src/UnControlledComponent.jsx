import React, { useRef } from 'react'

function UnControlledComponent() {

  const refObject = useRef() ; 

  function handleSubmit(e){
    e.preventDefault() ; 
    console.log((refObject.current.value).toUpperCase());
  }

  return (
    <>
      <form className='App' onSubmit={handleSubmit}>
          <label>First name: </label>
          <input 
          type='text'
          ref={refObject}
          ></input> <br/>
          <button>Submit</button>
      </form>   
    </>
  )
}

export default UnControlledComponent