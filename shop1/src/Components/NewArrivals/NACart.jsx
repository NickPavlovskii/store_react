import React from "react"
import NAdata from "./NAdata"

const NACart = () => {
  return (
    <>
      <div className='content grid product'>
        {NAdata.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <h4>{val.name}</h4>
              <span>${val.price}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default NACart