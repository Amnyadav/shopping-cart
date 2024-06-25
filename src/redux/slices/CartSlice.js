import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

// const [selected,setSelected]=useState(false);

const CartSlice =createSlice({
    name:"cart",
    initialState:[] ,
    reducers: {
        add:(state,action)=> {
            // setSelected(!selected)
            state.push(action.payload);
            
        },
        remove:(state,action)=> {
            return state.filter((item)=> item.id!== action.payload);
            // setSelected(!selected)
        }

    }
});

export const {add,remove} = CartSlice.actions;
export default CartSlice.reducer;