import React from 'react'
// import '//Cart.scss'
const Cart = ({CartItem, addToCart}) => {
  return (
    <>
      <section className='clart-itm'>
            <div className="container d_flex">
                <div className="cart_details">
                    {CartItem.length===0 && <h1 className='no-items product'>No items add cart </h1> }
        
                    {CartItem.map((item)=>{

                        const productQty = item.price * item.productQty
                        return(
                            <div className="cart-list pruduct d_flex">
                                        <div className="img">
                                            <img src={item.cover} alt="" />
                                        </div>
                            </div>
                        )
                    }
                    
                    
                    )}

                </div>
            </div>
      </section>
    </>
  )
}

export default Cart
