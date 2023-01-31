import React from 'react'
import './_Top.scss'
import { FaCaretRight} from 'react-icons/fa';
import { TopCart } from './TopCart';
export const Top = () => {
  return (
<section className='topCat background'>
    <div className='container'>
        <div className="heading d_flex">
            <div className="headin-left row f_flex">
           


<img src="https://img.icons8.com/glyph-neue/64/000111/guarantee.png"/>

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
