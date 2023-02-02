import React , { Component }from 'react'
import { Link } from "react-router-dom"
import { BsEnvelope } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';
import { AiOutlineEyeInvisible} from 'react-icons/ai';
import PasswordShowHide from './passwordShow';
import './Style.css'

const Log  = () => {

  // const pwShowHide = document.querySelectorAll(".showhidep"),
  //       pwFields =document.querySelectorAll(".password");
  
      
  //       pwShowHide.forEach(eyeIcon => {
  //         eyeIcon.addEventListener("click", ()=>{
  //           pwFields.forEach(pwField =>{
  //             if(pwField.type === 'password'){
  //               console.log("jfhghef")
  //               pwField.type = 'text';
  //             } else {
  //               pwField.type = 'password';
  //             }
  //           })
  //         })
  //       })
 

  
  return (
          
     
    <section className='contain'>
      <div className="cont">
      <div className="forms">
          <div className="form login">
            <span className='title'>Login</span>
            <form action="#">
              <div className="input">
                <input type="text" placeholder='Enter your email' required/>
                <BsEnvelope className='icn'/>
              </div>
              <div className="input">
               
              <PasswordShowHide/>
               {/* /* show/hide */}
              
              </div>

              <div className="checkbox-text d_flex">
                <div className="checkbox-content">  
                <input type="checkbox" id='logCheck' />
                <label htmlFor="logCheck" className='text'>Remember me</label>
                </div>
                <a href="" className='text'>forgot password</a>
              </div>
              <div className="input button">
                <input type="button" value='Login Now' />
              </div>
            </form>
            <div className="login-signup">
                <span className='text'>
                  Not a member?
                  <Link to='/register'>
                  <a href="" className="text signup-text">Signup now</a>
                  </Link>
                </span>
            </div>
          </div>
          </div>
      </div>
    {/* <div>Log</div> */}
    </section>
  )
}

export default Log