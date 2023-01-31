import React from 'react'
import Home from './Home'
import FlashDeals from '../Components/FlashDeals/FlashDeals'
import { Top } from '../Components/Top/Top'
import Shop from "../Components/Shops/Shop"
import { NewArrivals } from '../Components/NewArrivals/NewArrivals'
import Discount from '../Components/Discount/Discount'
import Annocument from '../Components/Annocument/Annocument'
import Wrapper from '../Components/Wrapper/Wrapper'
const Pages = ({productItems,CartItem, addToCart, shopItems }) => {
  return (
   <>
   <Home CartItem={CartItem}/>
   <FlashDeals productItems={productItems} addToCart={addToCart} />
   <Top/>
 <NewArrivals/>
 <Discount />
 <Shop shopItems={shopItems} addToCart={addToCart} />
 <Annocument/>
<Wrapper/>
   </>

  )
}

export default Pages
