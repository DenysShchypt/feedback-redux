import { createSlice } from "@reduxjs/toolkit";



const goodInitialState=0;

export const goodSlice=createSlice({
    name:'good',
    initialState:goodInitialState,
    reducers:{
        setGood(state,action){

            if (action.payload==='good') {
               return state+=1;
            }

        }
    }
})

export const {setGood} = goodSlice.actions;
