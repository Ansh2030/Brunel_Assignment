import React, {useEffect, useState } from 'react'
import './Register.css'
import logo from "../../Images/Vector.png";
import  { useNavigate } from 'react-router-dom';
import cross from '../../Images/Frame 1261155540.png'
import badge from "../../Images/Badges.png";



function Register() {
    const navigate = useNavigate();
   const [email, setEmail] = useState("");
   const [flag, setFlag] = useState(false);
   const [show, setShow] = useState(false);

   useEffect(() => {
    if (flag) {
      navigate("/success");
    }
  }, [flag, navigate]);


const check= ()=>{
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // setFlag(!regex.test(email));
  console.log(regex.test(email));
  setFlag(regex.test(email))
  setShow(!regex.test(email))
// console.log(flag);
// console.log(email);
 
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
   {show? <div className='error'>
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
