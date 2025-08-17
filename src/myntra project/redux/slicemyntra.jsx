import { createSlice } from "@reduxjs/toolkit";

 const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
addtocart:(state,action)=>{
    const cartitems= action.payload
const itemexist=state.cart.find(item=>item.id===cartitems.id)

           if(itemexist){
            itemexist.quantity+=1
            itemexist.totalprice=itemexist.quantity*itemexist.price
           }else{
            state.cart.push({...cartitems,quantity:1,totalprice:cartitems.Price,})
           }
           
        },
        increasequantity:(state,action)=>{
const item=state.cart.find(item=>item.id===action.payload.id)
if(item){
    item.quantity+=1
    item.totalprice=item.quantity*item.price
}
        },

        decreasequantity:(state,action)=>{
const item = state.cart.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.price;
      } else {
        
        state.cart = state.cart.filter(i => i.id !== action.payload.id);
      }
            
        },
        removefromcart:(state,action)=>{
            const cartsample= state.cart=state.cart.filter(item=>item.name!==action.payload.name)
            state.cart=cartsample
        },

        

    }
    
})

export const{addtocart,removefromcart,decreasequantity,increasequantity}=cartSlice.actions
export default cartSlice.reducer
