import React, { useState } from "react";
import "./Register.css" ; 

function Register() {

    const [email, setEmail] = useState() ;  // to manage state

    const [password, setPassword] = useState() ; 

    const [age, setAge] = useState() ; 

  function handleRegister(event) {
    event.preventDefault(); // do not reload the screen on calling this function
    console.log("Hello");
  }

  setAge(13) ; 

  

 // console.log(email) ; 
 // console.log(password) ; 

  return (
    <form>
        <div>
            <h1>{age}</h1>
          <input 
          className="form-input" type="email" 
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          ></input>
          <input 
          type="password" placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          ></input>
          <button 
          onClick={handleRegister}>Submit</button>
        </div>
    </form>
  );
}

export default Register;
