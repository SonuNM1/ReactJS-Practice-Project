
import React from 'react'
import { useSelector } from 'react-redux'

function BookContainer() {

    const noOfBook = useSelector(state => state.NumberofBook) ; 

  return (
    <>
        <div>Book Container</div>
        <h2>No of Books = {noOfBook}</h2>
    </>
  )
}

export default BookContainer