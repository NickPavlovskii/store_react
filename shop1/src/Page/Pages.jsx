import React from 'react'
import Home from './Home'
import FlashDeals from '../Components/FlashDeals/FlashDeals'
import { Top } from '../Components/Top/Top'

const Pages = ({productItems,CartItem, addToCart}) => {
  return (
   <>
   <Home CartItem={CartItem}/>
   <FlashDeals productItems={productItems} addToCart={addToCart} />
   <Top/>
 
   </>

  )
}

export default Pages
