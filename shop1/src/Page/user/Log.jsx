import React from 'react'
import { BsEnvelope } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';
import { AiOutlineEyeInvisible} from 'react-icons/ai';
import './Style.css'
const Log = () => {
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
                <input type="text" placeholder='Enter your password' required/>
                <FaLock className='icn'/>
                <AiOutlineEyeInvisible className='icn showhidep' />
              </div>

              <div className="checkbox-text">
                <div className="checkbox-content">  
                <input type="checkbox" id='logCheck' />
                <label htmlFor="" for='logCheck' className='text'></label>
                </div>
                <a href="" className='text'>forgot password</a>
              </div>
            </form>
          </div>
          </div>
      </div>
    {/* <div>Log</div> */}
    </section>
  )
}

export default Log