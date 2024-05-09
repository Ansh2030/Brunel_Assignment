import React from 'react'
import "./Success.css"
import tick from "../../Images/Tick + round.png";
import logo from "../../Images/Vector.png"
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Success() {
    const [seconds, setSeconds] = useState(5);
    const navigate  = useNavigate();
    useEffect(() => {
      const intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds(prevSeconds => prevSeconds - 1);
        }
      }, 1000);
  
      // Cleanup function to clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, [seconds]); 


  useEffect(() => {
   
      setTimeout(() => {
       navigate('/');
      }, 5000); // 5 seconds (5000 milliseconds)
    
  }, );


  return (

    <>
<img className='log' src={logo} alt="logo"/>
<div className='container'>
      <img src={tick} alt="tick"/>
      <div className='sec1'>
      <div className='suc'>
        Success Submitted
        </div>
        <div className='congo'>
Congratulations
        </div>
        <div className='msg'>
        Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates
        </div>
      
      </div>
    </div>

    <div className='redirect'>
    <span className='rt'> Redirecting you to Homepage in </span><span className='time'>{seconds}Seconds</span>
    </div>
    </>
    
  )
}

export default Success
