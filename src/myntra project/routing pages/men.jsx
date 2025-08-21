import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import styles from "./mens.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from 'react-redux'
import { addtocart } from '../redux/slicemyntra' 
import { addtowishlist } from '../redux/whishlistredux'
import { useSelector } from 'react-redux'
import { sortfn,newsortfn } from '../redux/sortslice'
 const Men = () => {
const dispatch =useDispatch()
const mycart=useSelector(state=>state.addcart.cart)
const newwishlist=useSelector(state=>state.addwishlist.mywishlist)
const [wishlist,setWishlist]=useState(new Set())

const productdata=useSelector(state=>state.actualsortproduct.resultsort)
   useEffect(()=>{
const productfn=async()=>{
const producturl="http://localhost:3001/products"
const productApi= await axios.get(producturl)
dispatch(sortfn(productApi.data))
}
console.log(productdata)


productfn()
   },[])

   const addcartbtn=(product)=>{
    
      dispatch(addtocart(product))
    
    }


   
   const addwishlisttbtn=(product)=>{

    const btnlist=newwishlist.some(item=>item.id===product.id)
    if(!btnlist){
dispatch(addtowishlist(product))
    }else{
      alert("this product is already in your wishlist")
    }

setWishlist((prev) => {
    const newSet = new Set(prev);
    if (newSet.has(product.id)) {
      newSet.delete(product.id);
    } else {
      newSet.add(product.id);
    }
    return newSet;
   })
   }


console.log(productdata)
  return (
   <>
   <div className="container mt-3 " style={{marginLeft:'15px'}}>
  <div className="d-flex justify-content-start">
    <select
      className="form-select form-select-sm w-auto border-secondary rounded-1 "
      onChange={(e) => dispatch(newsortfn(e.target.value))}
      defaultValue=" "
    >
      <option disabled value=" ">
        Sort by
      </option>
      <option value="low to high">Price: Low to High</option>
      <option value="high to low">Price: High to Low</option>
      <option value="no sort">No Sort</option>
    </select>
  </div>
</div>


   <div className={styles.products}>{productdata.map((product,id)=>{
    return(
    <div className={styles.productitems} key={id}>
      
      
      <div className={styles.imageWrapper}>
        {product.imgURIs?.[0] ? (
            <img className={styles.productimage}
              src={product.imgURIs[0]}
             alt='image is loading'
              
            />
          ) : (
            <p>No image available</p>
          )}
          <span className={styles.ratingBadge }

          >⭐ {product.rating}</span>
      </div>
       
           <p >{product.name}</p>

          <p>MRP:<s>{product.MRP}/-</s>({product.discount }%OFF)<br></br>
          Price:{product.price}/-only</p>
         
          
          
          <p>Brand:{product.brand}</p>
          
          <button className='btn bg-info ' style={{marginLeft:'45px'}} 
          onClick={()=>addcartbtn(product)}>Add to Cart</button>
          
         <button className={styles.button}>
  <p
    onClick={() => addwishlisttbtn(product)}
    style={{
      color: newwishlist.some(item => item.id === product.id) ? 'red' : 'white'
    }}
  >
    {newwishlist.some(item => item.id === product.id) ? '❤️' : '🤍'}
  </p>
</button>
   </div>)
    
   })}</div>
   
   
   </>
  )
}
export default Men