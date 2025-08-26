import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
 const Login = () => {
    const navigate=useNavigate()
    const [logindata,setLogindata]=useState({email:"",password:""})
    const [login,setLogin]=useState({email:"",password:""})
    const[error,setError]=useState("")
useEffect(()=>{

 
const handlelogin=async()=>{
    const logindetails= await axios.get("http://localhost:3001/security")
setLogindata({email:logindetails.data.email,password:logindetails.data.password})
}
handlelogin()

  
},[])
const Navigatefn=(e)=>{
  e.preventDefault()
    if(logindata.email === login.email || logindata.password === login.password){
       navigate("/home")
       toast.success("Login successfull")
    }else{

        setError("please enter valid details")
        toast.error("failed in login")
        setLogin({email:"",password:""})

    }
    
    
  }



  return (
    <>
    <form className="container mt-5 p-4 shadow rounded bg-white" style={{maxWidth:"400px"}}>
  <input 
    type='email'
    className="form-control mb-3"
    placeholder="Enter your email"
    value={login.email}
    onChange={(e) => setLogin({ ...login, email: e.target.value })}
  />
  
  <input
    type='password'
    className="form-control mb-3"
    placeholder="Enter your password"
    value={login.password}
    onChange={(e) => setLogin({ ...login, password: e.target.value })}
  />

  <p className='text-danger'>{error}</p>

  <button 
    className="btn btn-dark w-100"
    onClick={Navigatefn}
  >
    Submit
  </button>
</form>


    
    </>
  )
}
export default Login
