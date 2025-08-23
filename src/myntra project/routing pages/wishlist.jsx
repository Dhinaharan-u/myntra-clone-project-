import React from 'react'
import { addtowishlist } from '../redux/whishlistredux'
import { useDispatch, useSelector } from 'react-redux'
import styles from  "./mens.module.css"
import { removewishlist } from '../redux/whishlistredux'
import { toast } from 'react-toastify'
 const Wishlist = () => {
   const wishlist=useSelector(state=>state.addwishlist.mywishlist)
   const dispatch =useDispatch()

   const remove=(item)=>{
    dispatch(removewishlist(item))
    toast.info("Removed from Wishlist 💔");
   }
  return (
    <>
     


    <div  className={styles.products}>{ wishlist.length==0?<img  style={{height:'500px'}} 
     src='public/mywishlist.png' />: wishlist.map((item,index)=>{
          return(<div className={styles.productitems} key={index}>
           
            <img className={styles.productimage} src={item.imgURIs[0]}></img>
            <p>Name:{item.name}</p>
            <p>MRP:<s>{item.MRP}/-</s><br></br>
          Price:{item.price}/-only</p>
            <p>Brand:{item.brand}</p>
            <p>Rating:{item.rating}</p>
            <button className='btn btn-warning' onClick={()=>remove(item)}>remove from wishlist</button>
            
            
            </div>)
            
          
        })}</div>
    </>
  )
}
export default Wishlist
