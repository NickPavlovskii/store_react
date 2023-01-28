import React from 'react'
import {FaPhone, FaEnvelopeOpen} from 'react-icons/fa'
export const Head = () => {
  return (
    <section className="head">
        <div className="comtainer d_flex">
            <div className="left row">
                <FaPhone className='icn'/>
                <label >+88012 3457 7894</label>
                <FaEnvelopeOpen className='icn'/>
                <label >o_oniklado_o@list.ru</label>
            </div>
            <div className="right row Rtext">
            <label > FAQ</label> 
            <label >Need Helps</label>
            <span>◻️</span>
            <label htmlFor="">EN</label>
            <span>◻️</span>
            <label htmlFor="">USD</label>
            </div>

        </div>

    </section>
  )
}

export default Head