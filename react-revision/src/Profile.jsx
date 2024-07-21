
import React from 'react'

function Profile(props) {
  return (
    <div>
        <h1>{props.text.name}</h1>
        <p>{props.data}</p>
    </div>
  )
}

export default Profile