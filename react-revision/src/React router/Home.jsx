
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {

    const id = 5 ; 
    const navigate = useNavigate() ; 

    function goToAbout(){
        navigate("/about", {state: {id:id}}) ;
    }

  return (
    <>
    <div>Home</div>

    {/*
    <Link to="/about">About</Link> <br/>
    <Link to="/contact">Contact</Link>
    */}

    <button onClick={goToAbout}>About</button>
    </>
  )
}

export default Home