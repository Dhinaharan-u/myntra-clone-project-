import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from './slicemyntra'
import wishlistSliceReducer from './whishlistredux'

const store=configureStore({
    reducer:{
     addcart:cartSliceReducer,
     addwishlist:wishlistSliceReducer
    },
    
    
})

export default store