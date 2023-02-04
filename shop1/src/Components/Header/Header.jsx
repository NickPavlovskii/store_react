import React from 'react'
import './Header.css'
import  Head  from './Head'
import Search from './Search'
import Navbar from './Navbar'

    
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