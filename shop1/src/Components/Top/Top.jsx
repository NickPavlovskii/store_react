import React from 'react'
import './_Top.scss'
import {FaBorderAll, FaCaretRight} from 'react-icons/fa';
import { TopCart } from './TopCart';
export const Top = () => {
  return (
<section className='topCat background'>
    <div className='container'>
        <div className="heading d_flex">
            <div className="headin-left row f_flex">
           <i> <FaBorderAll className='border'/> </i>
            <h2>Top Categories</h2>

            </div>
            <div className="heading-right row">
                <span>View All</span>
               <i><FaCaretRight/></i> 
            </div>
        </div>
            <TopCart/>
    </div>
</section>
  )
}
