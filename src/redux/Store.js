// now lets create the store
import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slices/CartSlice";

export const store = configureStore({
    reducer:{
        cart:CartReducer, // cart is the name of that slice, whereas CartSlice is the name of that file .
    }
})

