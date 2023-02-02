import React from 'react'
import { Link } from "react-router-dom"
import { BsEnvelope } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';
import {  AiOutlineUser} from 'react-icons/ai';
import PasswordShowHide from './passwordShow';
import './Style.css'

const Reg = () => {
  return (
    <section className='contain'>
    <div className="cont">
    <div className="forms">
        <div className="form login">
          <span className='title'>Registration</span>
          <form action="#">
          <div className="input">
              <input type="text" placeholder='Enter your name' required/>
              <AiOutlineUser className='icn'/>
            </div>
            <div className="input">
              <input type="text" placeholder='Enter your email' required/>
              <BsEnvelope className='icn'/>
            </div>
            <div className="input">
            <PasswordShowHide/>
               {/* /* show/hide */}
            </div>
            <div className="input">
              <input type="text" placeholder='Repeat your password' required/>
              <FaLock className='icn'/>
             
            </div>
            <div className="checkbox-text d_flex">
              <div className="checkbox-content">  
              <input type="checkbox" id='logCheck' />
              <label htmlFor="" for='logCheck' className='text'>Remember me</label>
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
                <Link to='/user'>
                <a href="" className="text signup-text">Login now</a>
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

export default Reg
