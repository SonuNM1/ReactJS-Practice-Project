import React, { useState } from "react";
import InputBox from "./../../06currencyConverter/src/components/InputBox";

function Thirteen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isRegistered, setIsRegistered] = useState(false); // state to keep track of the user's registration status

  const [isLoggedIn, setIsLoggedIn] = useState(false); // state to track login status of user

  const [users, setUsers] = useState([]) ; 

  const handleAuthentication =()=>{
    if(isRegistered){
        // Login
        if(isRegistered){
            const user = users.find((u)=> u.email === email && u.password === password) ; 

            if(user){
                setIsLoggedIn(true) ; 
            }
            else{
                alert('Login failed. Please check your credentials')
            }
        }
    } 
    else{
        // Register
        const newUser = {email, password} ; 
        setUsers([...users, newUser]) ;

        localStorage.setItem('users', JSON.stringify([...users, newUser]));
        setIsLoggedIn(true) ; 
        console.log(`Registered and logged in as ${email}`);
    }
  }

  const handleLogout=()=>{
    setIsLoggedIn(false); 
    setEmail('');
    setPassword('') ; 
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {email}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
        {
            <h2> {isRegistered ? 'Login' : 'Register' } </h2>
        }
          <form>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <button onClick={handleAuthentication}>
            {isRegistered ? "Login" : "Register"}
            </button>

          </form>
          <p>
            {isRegistered
              ? "Don't have an account? Register me"
              : "Already have an account? Login"}
          </p>
          <button onClick={(e) => setIsRegistered(!isRegistered)}>
            {isRegistered ? "Switch to Register" : "Switch to Login"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Thirteen;
