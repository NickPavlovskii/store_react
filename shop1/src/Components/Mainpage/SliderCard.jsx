import React from 'react';
import SliderData from './SliderData';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderCard = () => {
    
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          appendDots:(dots) =>{
            return <ul style={{margin: '0px'}}>{dots}</ul>
          }

        };
  return (
    <>
     <Slider {...settings}>
    {SliderData.map((value,index)=>{
        return(

       
        <section >
        <div className="box d_flex top">
            <div className="left">
                <h1>{value.title}</h1>
                <p>{value.desk}</p>
                <button className='btn-primary'>visit Collections</button>
            </div>
            <div>
                <div className="right">
                    <img src={value.cover} alt="" />
                </div>
            </div>
        </div>
      </section>
        )
    })}
       </Slider>
    </>
  )
}

export default SliderCard
