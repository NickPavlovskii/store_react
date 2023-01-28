import React from 'react'

const Categories = () => {
    const data =[
        {
            categImg: "./images/category/cat1.png",
            categName: "Fashion"
        },
        {
            categImg: "./images/category/cat2.png",
            categName: "Electronic",
          },
          {
            categImg: "./images/category/cat3.png",
            categName: "Cars",
          },
          {
            categImg: "./images/category/cat4.png",
            categName: "Home & Garden",
          },
          {
            categImg: "./images/category/cat5.png",
            categName: "Gifts",
          },
          {
            categImg: "./images/category/cat6.png",
            categName: "Music",
          },
          {
            categImg: "./images/category/cat7.png",
            categName: "Health & Beauty",
          },
          {
            categImg: "./images/category/cat8.png",
            categName: "Pets",
          },
          {
            categImg: "./images/category/cat9.png",
            categName: "Baby Toys",
          },
          {
            categImg: "./images/category/cat10.png",
            categName: "Groceries",
          },
          {
            categImg: "./images/category/cat11.png",
            categName: "Books",
          },
    ]
  return (
    <>
    <div className='category' >
      {
        data.map((value, index)=> {
                return(
                    <div className="box f_flex" key={index}>
                        <img src={value.categImg} alt="" />
                        <span>{value.categName}</span>
                    </div>
                )
        })
      }
    </div>
    </>
  )
}

export default Categories
