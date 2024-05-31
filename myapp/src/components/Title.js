
import React from 'react'

// props -> Object

function Title(props) {
  return (
     <h1 style={{fontSize: 100, color: "indianred"}}>{props.name}</h1>
  )
}

export default Title