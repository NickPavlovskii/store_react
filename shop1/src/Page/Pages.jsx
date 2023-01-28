import React from 'react'
import Home from './Home'
import FlashDeals from '../Components/FlashDeals/FlashDeals'
const Pages = ({productItems,CartItem, addToCart}) => {
  return (
   <>
   <Home CartItem={CartItem}/>
   <FlashDeals productItems={productItems} addToCart={addToCart} />
   </>

  )
}

export default Pages
