import React, { useState } from "react";

import './App.css';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Header from './Components/Header/Header';

import Pages  from './Page/Pages';
import Data from './Components/FlashDeals/Data';
import Cart from "./Page/Cart/Cart";
import Sdata from "./Components/Shops/Sdata";
import Footer from "./Components/Footer/Footer";
function App() {
 


    const { productItems } = Data
    const { shopItems } = Sdata

 
  const [CartItem, setCartItem] = useState([])



  const addToCart = (product) => {  //добавление
   
    const productExit = CartItem.find((item) => item.id === product.id)
   
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      
        setCartItem([...CartItem, { ...product, qty: 1 }]) 
    }
  }
  
  const decreaseQty = (product) => { //уменьшение кол-ва товаров
   
    const productExit = CartItem.find((item) => item.id === product.id)

   
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  const paypalclass ='nones';
  const paypal  = (product) => {
  const productExit = CartItem.find((item) => item.id === product.id)
  const paypalclass ='nones';
  if (productExit === 0) {
    paypalclass += 'paypal' 
  } else {
    
    paypalclass -= 'paypal' 
  }
}

  const deleteQty=(product)=>{  //удаление товара
    // console.log('delete',product.id);
    setCartItem(CartItem.filter((item) => item.id !== product.id))
  }



    return (
    <>  
    
   

    <Router>
    <Header CartItem={CartItem}/>
    <Routes>
        <Route exact path='/'  element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}  />} />
      
        
    </Routes>
    <Routes>
        <Route exact path='/cart'  element={<Cart paypal={paypal} CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} deleteQty={deleteQty} />} />
      
        
    </Routes>
    <Footer/>
    </Router>
      
    
    
    


    </>
    
    )
}

export default App;
