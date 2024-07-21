import React, { useEffect, useState } from "react";
import './style/Form.css' ; 

function Form() {
  const data = {
    name: "",
    email: "",
    password: "",
  };

  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("Registered");
  }, [flag]);

  function handleData(e) {
    // get the name and value from the input field that triggered the event

    const name = e.target.name;
    const value = e.target.value;

    // create a new object with the updataed value

    const newInputData = {
      ...inputData, // copy existing state
      [name]: value, // update the specific field
    };

    setInputData(newInputData);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!inputData.name || !inputData.password || !inputData.email) {
      alert("All fields are mandatory");
    } else {
      setFlag(true);
    }
  }

  return (
    <>
        <div className={`message ${flag ? "show" : "hide"}`}>
            <h2>Hello {inputData.name}, You've registered successfully! </h2>
        </div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="header">
          <h1>Registration Form</h1>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={inputData.name}
            onChange={handleData}
            className="form-input"
          ></input>
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={inputData.email}
            onChange={handleData}
            className="form-input"
          ></input>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            value={inputData.password}
            onChange={handleData}
            className="form-input"
          ></input>
        </div>
        <div className="form-group">
          <button 
          type="submit"
          className="submit-button"
          >Submit</button>
        </div>
      </form>
    </>
  );
}

export default Form;
