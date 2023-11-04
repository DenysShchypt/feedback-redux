import { createSlice } from "@reduxjs/toolkit";



const neutralInitialState=0;

export const neutralSlice=createSlice({
    name:'neutral',
    initialState:neutralInitialState,
    reducers:{
        setNeutral(state,action){
            if (action.payload==='neutral') {
                return state+=1;
            }

        }
    }
})

export const {setNeutral} = neutralSlice.actions;