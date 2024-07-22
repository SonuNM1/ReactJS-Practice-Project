import React from "react";
import { useState } from "react";

function ControlledComponent() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e) {

    console.log(e.target.name);
    
    if (e.target.name == "firstName") {
      const CapName = e.target.value.toUpperCase();
      setName(CapName);
    } else {
      setPassword(e.target.value);
    }

  }

  return (
    <>
      <form className="App">
        <label>First name:</label><br />
        <input
          type="text"
          name="firstName"
          value={name}
          onChange={handleChange}
        ></input><br />

        <label>Password: </label><br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        ></input><br />
        
      </form>
    </>
  );
}

export default ControlledComponent;
