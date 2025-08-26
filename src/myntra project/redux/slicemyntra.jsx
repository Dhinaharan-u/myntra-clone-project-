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
            itemexist.totalprice=itemexist.quantity*Number(itemexist.price)
           }else{
           state.cart.push({
  ...cartitems,
  quantity:1,
  price: Number(cartitems.price),          
  totalprice: Number(cartitems.price),      
});
           }
           
        },
        increasequantity:(state,action)=>{
const item=state.cart.find(item=>item.id===action.payload.id)
if(item){
    item.quantity+=1
    item.totalprice=item.quantity*Number(item.price)
}
        },

        decreasequantity:(state,action)=>{
const item = state.cart.find(item => item.id === action.payload.id);
      if (item.quantity > 1) {
        item.quantity -= 1;
        item.totalprice = item.quantity * Number(item.price);
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
