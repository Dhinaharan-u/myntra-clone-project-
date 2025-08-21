import { createSlice } from "@reduxjs/toolkit";
const sortSlice=createSlice({
    name:'sort',
    initialState:{
        actualsort:[],
        resultsort:[]

    },
    reducers:{
        sortfn:(state,action)=>{
           
            state.actualsort=action.payload
            state.resultsort=action.payload
            

        },
        newsortfn:(state,action)=>{
          if(action.payload==="low to high"){
          state.resultsort=[...state.resultsort].sort((a,b)=>a.price-b.price)
                  }
        else if(action.payload==="high to low"){
                state.resultsort=[...state.resultsort].sort((a,b)=>b.price-a.price)
              } 
               else if(action.payload==="nosort"){
                state.resultsort=state.actualsort
              } 
              


        }
    }
})
export const{sortfn,newsortfn}=sortSlice.actions
export default sortSlice.reducer