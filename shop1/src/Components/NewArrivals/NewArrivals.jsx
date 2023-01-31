import React from 'react'
import { FaCaretRight} from 'react-icons/fa';
import NACart from './NACart.jsx';
import './NewArrivals.css'


export const NewArrivals = () => {
  return (
    <>
    <section className='NewArrivals background'>
    <div className='container'>
        <div className="heading d_flex">
            <div className="headin-left row f_flex">
        
           <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
           <h2>New Arrivals </h2>

            </div>
            <div className="heading-right row">
                <span>View All</span>
               <i><FaCaretRight/></i> 
            </div>
        </div>
            <NACart/>
    </div>
</section>
    
    </>
  )
}
export default NewArrivals
