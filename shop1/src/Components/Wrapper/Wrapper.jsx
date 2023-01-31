import React from "react"
import "./Wrapper.css"
import {TbTruckDelivery } from 'react-icons/tb';
import {BiIdCard } from 'react-icons/bi';
import {BsFillShieldFill } from 'react-icons/bs';
import {FaHeadset } from 'react-icons/fa';
const Wrapper = () => {
  const data = [
    {
      cover: <i><TbTruckDelivery/></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <BiIdCard/>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <BsFillShieldFill/>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <FaHeadset/>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
