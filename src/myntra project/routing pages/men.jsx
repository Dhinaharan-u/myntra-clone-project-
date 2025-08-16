import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import styles from "./mens.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from 'react-redux'
import { addtocart } from '../redux/slicemyntra' 
import { addtowishlist } from '../redux/whishlistredux'
import { useSelector } from 'react-redux'
 const Men = () => {
const dispatch =useDispatch()
const mycart=useSelector(state=>state.addcart.cart)
const newwishlist=useSelector(state=>state.addwishlist.mywishlist)
const [wishlist,setWishlist]=useState(new Set())

const [productdata,setProductdata]=useState([])
   useEffect(()=>{
const productfn=async()=>{
const producturl="http://localhost:3001/products"
const productApi= await axios.get(producturl)
setProductdata(productApi.data)
}
console.log(productdata)
// hi iam dhina

productfn()
   },[])

   const addcartbtn=(product)=>{
    // const exists =mycart.some(item=>item.id===product.id)
    // if(!exists){
      dispatch(addtocart(product))
    // }else{
    //   alert("the product is already in your cart")
    }


   
   const addwishlisttbtn=(product,index)=>{

    const btnlist=newwishlist.some(item=>item.id===product.id)
    if(!btnlist){
dispatch(addtowishlist(product))
    }else{
      alert("this product is already in your wishlist")
    }

setWishlist((prev) => {
    const newSet = new Set(prev);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    return newSet;
   })
   }


console.log(productdata)
  return (
   <>
   <div className={styles.products}>{productdata.map((product,index)=>{
    return(
    <div className={styles.productitems} key={index}>
      
      
      
       {product.imgURIs?.[0] ? (
            <img className={styles.productimage}
              src={product.imgURIs[0]}
             alt='image is loading'
              
            />
          ) : (
            <p>No image available</p>
          )}
           <p >Name:{product.name}</p>

          <p>MRP:<s>{product.MRP}/-</s><br></br>
          Price:{product.price}/-only</p>
         
          <p>Discount:{product.discount}%</p>
          
          <p>Brand:{product.brand}</p>
          <p>Rating:{product.rating}</p>
          <button className='btn bg-info ' style={{marginLeft:'45px'}} 
          onClick={()=>addcartbtn(product)}>Add to Cart</button>
          
         <button className={styles.button}><p
  onClick={() => addwishlisttbtn(product, index)}
  style={{ color: wishlist.has(index) ? 'red' : 'white' }}
>
  {wishlist.has(index) ? '❤️' : '🤍'}
</p></button> 
   </div>)
    
   })}</div>
   
   
   </>
  )
}
export default Men