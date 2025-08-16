import React from 'react'
import { addtocart,removefromcart } from '../redux/slicemyntra'
import { useDispatch, useSelector } from 'react-redux'
import cartstyles from  "./cartpage.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'


 const Cart = () => {

  
  const cartitems=useSelector(state=>state.addcart.cart)
  console.log(cartitems)
  const cartdispatch=useDispatch()

  const removecart=(item)=>{
    cartdispatch(removefromcart(item))
  }
  const addquantity=()=>{


    
  }
  return (
    <>
    <div style={{display:"flex",width:"fitcontent"}}>  
      <div className={cartstyles.products}>{cartitems.length==0?<img  style={{ height:'300px' ,marginTop:'50px'
      ,marginLeft:'500px',position:'static'}} 
     src='public/cartimage.png'/>: cartitems.map((item,index)=>{
      return(<div className={cartstyles.productitems} key={index}>
      
       <img
  className={cartstyles.productimage}
  src={item.imgURIs && item.imgURIs.length > 0 ? item.imgURIs[0] : 'fallback-image-url.jpg'}
  alt={item.name}
/>
        <div className={cartstyles.cartdetail}>
        <p>Name:{item.name}</p>
        <p>MRP:<s>{item.MRP}/-</s><br></br>
          Price:{item.price}/-only</p>
        <p>Brand:{item.brand}</p>
        <p>7days return available</p>
       
        
       <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',width:'15px',textAlign:'center',gap:'10px'}}>
        <button className="btn btn-outline-success mb-2">-</button><p>0</p>
       <button className="btn btn-outline-success mb-2"onClick={addquantity()}>+</button></div>
        <button className='btn btn-warning'onClick={()=>removecart(item)}>remove from cart</button>
       
        </div>
        
        </div>)
        
       
    })}</div>

       <div className= {cartstyles.cartproducts}>{cartitems.length>0  ? <div className={cartstyles.list}><p>Total MRP:</p>
       <p>Platform Fee:</p>
       <p>Delivery Charge:</p>
       <h3>Total Amount:</h3>
       <button className="btn btn-danger btn-lg w-100">Place Order</button>
       </div>
                 
       
       :<p></p>}</div>
       </div>

      
    
    
    
    </>
  )
}
export default Cart