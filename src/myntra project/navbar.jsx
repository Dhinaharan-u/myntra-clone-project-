import React from 'react'
import navbarstyles from './navbar.module.css'
import { Link } from 'react-router-dom'
import navbarlogo from "../assets/logo image.jfif"
import { useDispatch, useSelector } from 'react-redux'
import { addtowishlist } from './redux/whishlistredux'
import { searchfn } from './redux/sortslice'
 const Navbar = () => {
   const dispatch=useDispatch()
  const countwishlist=useSelector((state)=>state.addwishlist.mywishlist)
  const countcart=useSelector((state)=>state.addcart.cart)
  const handleSearch = (e) => {
    dispatch(searchfn(e.target.value));
  };
  return (
    <>
    <div className={ navbarstyles.navbar}>
       <Link to={"/"}><img  className={navbarstyles.navlogoimage}src={navbarlogo}></img></Link>

        
        <div className={navbarstyles.navicons}>
            <Link to={"/men"}style={{textDecoration:"none"}}><p className={navbarstyles.txt}>Men</p></Link>
            <Link to={"/men"}style={{textDecoration:"none"}}><p className={navbarstyles.txt}>Women</p></Link>
            <Link to={"/men"}style={{textDecoration:"none"}}><p className={navbarstyles.txt}>Kids</p></Link>
            <Link to={"/men"}style={{textDecoration:"none"}}><p className={navbarstyles.txt}>Beauty</p></Link>
            <Link to={"/men"}style={{textDecoration:"none"}}><p className={navbarstyles.txt}>Gens</p></Link>
            <Link to={"/men"}style={{textDecoration:"none"}}><p className={navbarstyles.txt}>Studio</p></Link>
            
        </div>
        <hr></hr>
        <input placeholder='Search for products,brands and more' onChange={handleSearch}></input>
       <Link to={'/wishlist'} style={{ textDecoration: "none", color: 'black', position: 'relative' }}>
  <p style={{ textAlign: "center" }}>
    🤍<br />Wishlist
    {countwishlist.length > 0 && (
      <span style={{
        position: 'absolute',
        top: '-5px',
        right: '-10px',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '2px 6px',
        fontSize: '12px',
        marginRight:'12px'
      }}>
        {countwishlist.length}
      </span>
    )}
  </p>
</Link> 
       <Link to={'/Profile'}style={{textDecoration:"none",color:'black'}}>
       <p style={{textAlign:"center"}}>👤<br></br>Profile</p></Link> 
       <Link to={'/cart'}style={{textDecoration:"none",color:'black'}}>
       <p style={{textAlign:"center"}} >🛒<br></br>Cart  
       {countcart.length > 0 && (
      <span style={{
        position: 'absolute',
        top: '5px',
        right: '-10px',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '2px 6px',
        fontSize: '12px',
        marginRight:'50px'
      }}>
        {countcart.length}
      </span>
    )}
       </p></Link> 
    </div>
    </>
  )
}
export default Navbar