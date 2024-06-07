// now lets create the store
import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";

export const store = configureStore({
    reducer:{
        cart:CartSlice, // cart is the name of that slice, whereas CartSlice is the name of that file .
    }
})

