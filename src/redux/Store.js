// now lets create the store
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";

export const store = configureStore({
    reducer:{
        cart:cartReducer, // cart is the name of that slice, whereas CartSlice is the name of that file .
    }
})

