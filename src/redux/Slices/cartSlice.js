import { createSlice } from "@reduxjs/toolkit";

// so lets first create the slice 

export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:()=>{},
        remove:()=>{},
    }
})

export const {add,remove} = CartSlice.actions;
export default CartSlice.reducer;