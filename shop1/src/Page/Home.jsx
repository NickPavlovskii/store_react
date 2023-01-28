import React from 'react'
import Categories from '../Components/Mainpage/Categories'
import Slider from '../Components/Mainpage/Slider'
import '../Components/Mainpage/Home.css';
const Home = () => {
  return (
    <>
    <section className='home'>
        <div className="container d_flex">

            <Categories/>
            <Slider/>
        </div>

    </section>
    </>
  )
}

export default Home