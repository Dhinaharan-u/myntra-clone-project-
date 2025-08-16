import { createSlice } from "@reduxjs/toolkit";

 const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:{
        mywishlist:[]
    },
    reducers:{
        
        addtowishlist:(state,action)=>{
            const wishlist=action.payload
            const list=state.mywishlist.some(item=>item.id===wishlist.id)
            if(!list){
                state.mywishlist.push(wishlist)
            }
        },
        removewishlist:(state,action)=>{
            const wishlistsample= state.mywishlist=state.mywishlist.filter
            (item=>item.name!==action.payload.name)
            state.mywishlist=wishlistsample
        }

    }
    
})
export const{addtowishlist,removewishlist}=wishlistSlice.actions
export default wishlistSlice.reducer
// const itemexist=state.cart.some(item=>item.id===cartitems.id)
//            if(!itemexist){
//             state.cart.push({...cartitems,quantity:1})
//            }