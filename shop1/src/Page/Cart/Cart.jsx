import React ,  { useState } from 'react'
import {FaTimes, FaPlus, FaMinus} from 'react-icons/fa';
import Pay from './Pay';
import './_Cart.scss'


const Cart = ({CartItem, addToCart, decreaseQty,deleteQty}) => {
 
 
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)
  return (
      
    <>
    
      <section className='cart-itm'>
            <div className="container d_flex">
                <div className="cart_details">
                    {CartItem.length===0 && <h1 className='no-items product'>No items add cart </h1>  }
        
                    {CartItem.map((item)=>{

                            const productQty = item.price * item.qty

                        return(
                            <div className="cart-list pruduct d_flex">
                                        <div className="img">
                                            <img src={item.cover} alt="" />
                                        </div>
                                        <div className="cart-details">
                                          <h3>{item.name}</h3>
                                          <h4>
                                          {item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                                          </h4>
                                        </div>
                                        <div className='cart-items-function'>
                                            <div className="removeCart">
                                              <button className="removeCart"  onClick={()=>deleteQty(item)}>
                                                 <i> <FaTimes/> </i>
                                              </button>
                                              
                                            </div>

                                            <div className="cartControl d_flex">
                                              <button className='inCart' onClick={()=>addToCart(item)}>  <FaPlus/>    </button>
                                           
                                           
                                              <button className='inCart' onClick={()=>decreaseQty(item)}>  <FaMinus/>    </button>
                                            </div>
                                        </div>
                                        <div className="cart-item-price"></div>
                            </div>
                            
                        )
                    }
                    
                    
                    )}



                </div>
                <div className='cart-total product'>
  <h2>Cart Summary</h2>
  <div className='d_flex'>
    <h4>Total Price :</h4>
    <h3>${totalPrice}.00</h3>
  </div>
  {CartItem.length>0 && <Pay/>  }
</div>


            </div>
            
      </section>
    </>
  )
}
// const [CartItem, setCartItem] = useState([])

// const paypal  = (product) => {
//   const productExit = CartItem.find((item) => item.id === product.id)

//   if (productExit>0) {
//     paypalclass += 'paypal' 
//   } else {
    
//     paypalclass -= 'paypal' 
//   }
// }

export default Cart
