
import {createStore} from "redux" ; 
import BookReducer from "./BookReducer";

const store = createStore(BookReducer) ; // stores the application state

export default store ; 