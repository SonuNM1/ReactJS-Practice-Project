
import { buy_book } from "./BookTypes" ; 

const initialState = {
    NumberOfBook : 20 
}

const BookReducer=(state = initialState, action)=>{

    switch(action.type){
        case buy_book:
            return {
                ...state, NumberOfBook: state.NumberOfBook-1  // include all the properties of the current state in the new state object 
            }
        default: 
            return state
    }
}

export default BookReducer ; 