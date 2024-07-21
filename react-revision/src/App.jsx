import React, { createContext } from "react";
import "./App.css";
// import Profile from "./Profile";
// import ChildA from "./props drilling/ChildA";
import Form from "./Form";

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

        <Form/>

    </>
  );
}

export default App;

// export { data, data1 };
