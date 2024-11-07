import React from 'react'
import MainOne from '../components/MainOne'
import MainTwo from '../components/MainTwo'
import MainThree from '../components/MainThree'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='overflow-x-hidden'  >
       
         <MainOne/>
         <MainTwo/>
         <MainThree/>
         <Footer/>
         

    </div>
  )
}

export default Home