import React from 'react'
import './Home.css'
import logo from "../../Images/Vector.png";

import mask from "../../Images/Mask group.png";
import sp from "../../Images/spark, sparkle, 26.png";
import icon from "../../Images/Group 1171281573.png";
import arrow from "../../Images/Frame.png";
import dot1 from "../../Images/Ellipse 10742.png";
import dot2 from "../../Images/Ellipse 10743.png";
import a from "../../Images/Union.png";
import plus from "../../Images/Frame (2).png";
import minus from  "../../Images/Frame (3).png";

import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
function Home() {
  const navigate = useNavigate();

  return (
    <div>
     <div className='hero'>
        <div className='one'>
        <img src={logo} alt="Bruenel Logo"/> 

        <div className='right'>
          <div className='project' onClick={()=>navigate('/register')} ><p>Get Projects</p></div>
          <div className='talent'><p>Onboard talent</p></div>
        </div>
        </div>

        <div className='two'>
          <div className='written'>
            {/* <img src={ss} alt="Success Stories"/> */}
            <div className='sstory'>Success Stories</div>
            <div>
              Every success journey we've encountered.
            </div>
          </div>

          <div className='grp'>
          <img className='mask' src={mask} alt="mask"/>
          <div className='mil'>
              <div className='img'>
                <div className='img1'>$0.5</div>
                <div className='img2'>million</div>
              </div>  
              <div className='text'>
              Reduced client expenses by saving on hiring and employee costs.
              </div>
          </div>

          {/* forty percent block */}
          <div className='forty'>
            <img src={sp} alt=""/>
            <div className='img1'>
            40%
            </div>
            <div className='img2'>
            Achieved reduction in project execution time by optimising team availability
            </div>

          </div>

          {/* days */}
          <div className='days'>
              <img src={icon} alt="" className='sec1'/>

              
              <div className='sec2'>
                <div className='t1'>10 days</div>
                  <div className='t2'>Staff Deployment</div>

                  </div>
            
    
          </div>
          </div>


          <div className='enhance'>
          Enhance fortune 50 company’s insights teams research capabilities
          </div>

          <div className='dots'>
            <img src={dot1} alt=""/>
            <img src={dot2} alt=""/>
            <img src={dot2} alt=""/>
          </div>

          <div className='explore'>
            <div>Explore more</div>
            <img className='frame' src = {arrow} alt=""/>
          </div>

      </div>


        <div className='three'>
          <div className='left'>
            <div className='one'>
              <div className='whats'>What’s on your mind</div>
              <div className='ask'>Ask Questions</div>
            </div>
            <img src={a} alt=""/>

          </div>
          <div className='right'>
            <div className='onee'>
              <div className='ques'>
                <div className='cont'>
                <div className='txt'>Do you offer freelancers?</div>
                <img src={plus} alt=""/>
                </div>
                <div className='line'></div>
              </div>


              <div className='ques'>
                <div className='cont'>
                <div className='txt'>Do you offer freelancers?</div>
                <img src={plus} alt=""/>
                </div>
                <div className='line'></div>
              </div>



              <div className='ques'>
                <div className='cont'>
                <div className='txt'>Can I hire multiple talents at once?</div>
                <img src={minus} alt=""/>
                </div>
                <div className='det'>If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.</div>
                <div className='line'></div>
              </div>


              <div className='ques'>
                <div className='cont'>
                <div className='txt'>Why should I not go to an agency directly?</div>
                <img src={plus} alt=""/>
                </div>
                <div className='line'></div>
              </div>


              <div className='ques'>
                <div className='cont'>
                <div className='txt'>Who can help me pick a right skillset
                                                        and duration for me?</div>
                <img src={plus} alt=""/>
                </div>
                <div className='line'></div>
              </div>



            </div>
          </div>
          
        </div>

    <Footer/>
     </div>
    </div>
  )
}

export default Home
