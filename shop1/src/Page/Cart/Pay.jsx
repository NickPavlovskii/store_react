import React from 'react'
import './_Cart.scss'
import {BsFillCreditCardFill} from 'react-icons/bs';
const Pay = () => {
    const paypalClass ='paypal';
  return (
    <section className='flex'>
    <div className={paypalClass} >
   
    <img src="./images/paypa.png" alt="" className='paypalIMG' />
  </div>
  <div className=' credit' >
    <BsFillCreditCardFill className='icon'/>
   <h1>Credit Card</h1> 
   </div>
  </section>
  )
}

export default Pay