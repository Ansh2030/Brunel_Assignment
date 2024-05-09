import React from 'react'
import "./Footer.css"
import cc from "../../Images/Frame (4).png";
function Footer() {
  return (
    <div className='footer'>
    <div className='left'>
      <img src={cc} alt="copy right"/>
      <p>Talup 2023. All rights reserved</p>
    </div>
    <div className='right'>

      <div className='t1'>Terms & Conditions</div>
      <div className='t2'>Privacy Policy</div>
    </div>
    </div>

  )
}

export default Footer
