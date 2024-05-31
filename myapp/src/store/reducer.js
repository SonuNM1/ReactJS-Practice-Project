
import { createAction, createReducer } from "@reduxjs/toolkit";

const increment = createAction("counter/increment") ; 
const incrementByAmount = createAction("counter/incrementByAmount") ; // Action

const initialState = { value: 0} ; // initial store/state

const rootReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state, action) => {
            state.value++ ; 
        })
        .addCase(incrementByAmount, (state, action)=>{
            state.value += action.payload ; 
        }) ; 
}) ; 

export {incrementByAmount}

export default rootReducer ; 