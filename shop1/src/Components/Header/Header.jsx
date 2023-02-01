import React from 'react'
import './Header.css'
import  Head  from './Head'
import Search from './Search'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
export const Header = ({CartItem}) => {
  return (
    <>
        <Head/>
        <Search CartItem={CartItem} />
        <Navbar/>
        
    </>
  )
}

export default Header;