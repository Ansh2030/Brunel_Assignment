import React, { useEffect, useState } from 'react'
import './Register.css'
import logo from "../../Images/Vector.png";
import  { useNavigate } from 'react-router-dom';
import cross from '../../Images/Frame 1261155540.png'
import badge from "../../Images/Badges.png";



function Register() {
    const navigate = useNavigate();
   const [email, setEmail] = useState("");
   const [flag, setFlag] = useState(true);

const check= ()=>{

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // setFlag(!regex.test(email));
  setFlag(email.match(regex))

  if(flag==false){
    navigate("/success");
  }
}
 

  return (

    <>
      <div>
        <img className='logo' src = {logo} alt= "Logo"/>
        <img className = "cross"src = {cross} alt = "" onClick={()=> navigate('/')} />
      </div>

     <div className='hug'>
     <div className='d1'>
        <p className='p1'>Registration Form</p>
        <p className='p2'> 
            Start your success journey here!
        </p>
     </div>
     <div className='d2'>
        <div className='formfield'>
 <div className='top'>
    <div className='topD'>
    <input type='text' placeholder='Enter your name'/>
    </div>

    <div className='topD'>
    <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter your email'/>
    </div>
   {!flag? <div className='error'>
      <img src = {badge} alt=""/>
      <p>Enter a valid email address</p>
    </div>:""

   }
   
   
 </div>
 <div onClick={check}  className='sub'>
   <p>Submit
    </p>  
  </div>
        </div>
     </div>
  </div>
    
    </>
   
  )
}

export default Register
