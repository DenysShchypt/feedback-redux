import { createSlice } from "@reduxjs/toolkit";



const badInitialState=0;

export const badSlice=createSlice({
    name:'bad',
    initialState:badInitialState,
    reducers:{
        setBad(state,action){
            if (action.payload==='bad') {
               return state+=1;
            }

        }
    }
})

export const {setBad} = badSlice.actions;