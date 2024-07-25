import React from 'react'
import { useLocation } from 'react-router-dom'

function About() {

    const location = useLocation();
    console.log(location.state);

  return (
    <div>About and id: {location.state.id}</div>
  )
}

export default About