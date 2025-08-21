import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from './slicemyntra'
import wishlistSliceReducer from './whishlistredux'
import sortslice from "./sortslice";

const store=configureStore({
    reducer:{
     addcart:cartSliceReducer,
     addwishlist:wishlistSliceReducer,
     actualsortproduct:sortslice
    },
    
    
})

export default store