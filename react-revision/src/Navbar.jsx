
import React, { useEffect } from 'react'

const Navbar = ({color}) => {

    useEffect(()=>{
        alert("color was changed")
    },[color])

  return (
    <>
        I am navbar of {color} color hehehehe....
    </>
  )
}

export default Navbar