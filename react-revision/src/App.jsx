import React, { createContext, useState } from "react";
import "./App.css";
// import Profile from "./Profile";
// import ChildA from "./props drilling/ChildA";
import Form from "./Form";
import ControlledComponent from "./ControlledComponent";
import UnControlledComponent from './UnControlledComponent';
import State from "./State";
import UseEffect from "./hooks/UseEffect";
import Navbar from "./Navbar";
import UseRef from "./hooks/UseRef";
import UseMemo from "./hooks/UseMemo";

/*
const data = createContext();
const data1 = createContext();
*/

function App() {

 

  /*
  const name = "Sonu NM";
  const gender = "Male";
  */

  return (
    <>
      {/*<Profile 
        text={{ name: "Sonu NM" }}
        data="Profile data"
      />*/}

      {/*<data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildA />
        </data1.Provider>
      </data.Provider>*/}

      {/*<data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildA />
        </data1.Provider>
      </data.Provider>*/}

        {/*<Form/>*/}

        {/*<ControlledComponent/>*/}

        {/*<Navbar color={"navy"+" blue"}/>*/}

        <UseMemo/>

    </>
  );
}

export default App;

// export { data, data1 };
