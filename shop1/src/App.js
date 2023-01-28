import React, { useState } from "react";

import './App.css';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Header from './Components/Header/Header';

import Pages  from './Page/Pages';
import Data from './Components/FlashDeals/Data';
import Cart from "./Page/Cart/Cart";
function App() {
 


    const { productItems } = Data


 
  const [CartItem, setCartItem] = useState([])
    
const addToCart=(product) => {
    const productExit=CartItem.find((item)=>item.id===product.id)

    if (productExit) {
        setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
      } else {
     
        setCartItem([...CartItem, { ...product, qty: 1 }])
      }
}

    return (
    <>  
    
   

    <Router>
    <Header CartItem={CartItem}/>
    <Routes>
        <Route exact path='/'  element={<Pages productItems={productItems} addToCart={addToCart} />} />
      
        
    </Routes>
    <Routes>
        <Route exact path='/cart'  element={<Cart CartItem={CartItem} addToCart={addToCart} />} />
      
        
    </Routes>
    </Router>
      
    
    
    


    </>
    
    )
}

export default App;
