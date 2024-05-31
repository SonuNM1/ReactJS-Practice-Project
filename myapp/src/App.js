import React from "react";
import Register from "./screens/Register";
import {createBrowserRouter, RouterProvider} from "react-router-dom" ; 
import UserList from "./screens/UserList";
import {Provider} from "react-redux" ; 
import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./store/reducer";
import store from "./store/store" ; 

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/user-list",
    element: <UserList/>,
  },
  {
    path: "/home",
    element: <div>This is Home Page</div>,
  },
]) ; 

function App() {
  return (
    <>
      <Provider store={store} >
      <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
