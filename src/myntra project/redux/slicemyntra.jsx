import { createSlice } from "@reduxjs/toolkit";

 const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
addtocart:(state,action)=>{
    const cartitems= action.payload
const itemexist=state.cart.some(item=>item.id===cartitems.id)
           if(!itemexist){
            state.cart.push({...cartitems,quantity:1})
           }
        },
        removefromcart:(state,action)=>{
            const cartsample= state.cart=state.cart.filter(item=>item.name!==action.payload.name)
            state.cart=cartsample
        },
        

    }
    
})

export const{addtocart,removefromcart}=cartSlice.actions
export default cartSlice.reducer
