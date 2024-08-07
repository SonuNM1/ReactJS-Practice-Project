import React, { createContext, useState } from "react";
import "./App.css";
// import Profile from "./Profile";
// import ChildA from "./props drilling/ChildA";
/*import Form from "./Form";
import ControlledComponent from "./ControlledComponent";
import UnControlledComponent from './UnControlledComponent';
import State from "./State";
import UseEffect from "./hooks/UseEffect";
import Navbar from "./Navbar";
import UseRef from "./hooks/UseRef";
import UseMemo from "./hooks/UseMemo";
import UseCallback from "./UseCallback";
import UseReducer from "./UseReducer";
import CustomHook from "../CustomHook";
import AgeValidation from "../AgeValidation";
*/
import Mapping from "./Mapping";
import Mapping2 from "./Mapping2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./React router/Home";
import About from "./React router/About";
import Contact from "./React router/Contact";

import { Provider } from "react-redux";
import store from "./Redux Container/Store";
import BookContainer from "./Redux Container/BookContainer";

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
    <Provider store={store}>
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

        {/*<Mapping2/>*/}

        {/*<Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>*/}

        <BookContainer/>

      </>
    </Provider>
  );
}

export default App;

// export { data, data1 };
