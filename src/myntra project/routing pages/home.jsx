import React, { useState } from 'react'
import   axios from 'axios'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

 const Home = () => {
  
const [sliderapi,setSliderapi]=useState([])
  
    useEffect(()=>{
      const url='http://localhost:3001/Slider'
      const sliderapifetch=async()=>{
const sliderapi=await axios.get(url)
    setSliderapi(sliderapi.data)
      }
    sliderapifetch()
   },[])

console.log(sliderapi)

 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
   <>
   <div  style={{ width: '80%', margin: 'auto',marginTop:'10px' }} >
    <Slider {...settings}>
      {sliderapi.map((sliderimage,index)=>{
return(
  <div key={index}>
   <img src={sliderimage.uri} />
   
    
  </div>
  
)
   })}
    </Slider>
</div>
   
   
   </>
  )
}
export default Home
