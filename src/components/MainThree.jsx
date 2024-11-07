import React from 'react'
import { FaBus } from 'react-icons/fa'

const MainThree = () => {
  return (
    <div className='py-10 md:py-28 bg-forth'>
        <div className='container' >
        <h1 className='tracking-wider text-3xl font-general text-center '> Why Choose Us</h1>
<div>

<div className='flex justify-center mt-10 sm:mt-14 cursor-pointer hover:text-secondary hover:scale-105 duration-300 font-general'>
<button className="btn glass btn-warning ">Comment Us </button>
</div>
    
<div className='grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4 font-fewer mt-36'> 

<div data-aos="fade-up" className='text-center flex justify-center items-center flex-col gap-5 px-2 '>
    <p >Lorem ipsum dolor sit amet.</p>
    <p className='text-4xl rotate-90 text-center translate-x-5'>.......</p>
    <FaBus className='text-4xl text-secondary ml-4 '/>
</div>
<div data-aos="fade-down" className='text-center flex justify-center items-center flex-col gap-5 px-2 '>
        <FaBus className='text-4xl text-primaryDark ml-4 '/>
        <p className='text-4xl rotate-90 text-center translate-x-5'>.......</p>
    <p >Lorem ipsum dolor sit amet.</p>
</div>
<div  data-aos="fade-up"className='text-center flex justify-center items-center flex-col gap-5 px-2 '>
    <p >Lorem ipsum dolor sit amet.</p>
    <p className='text-4xl rotate-90 text-center translate-x-5'>.......</p>
    <FaBus className='text-4xl text-tex ml-4 '/>
</div>
<div data-aos="fade-down" className='text-center flex justify-center items-center flex-col gap-5 px-2 '>
        <FaBus className='text-4xl text-third ml-4 '/>
        <p className='text-4xl rotate-90 text-center translate-x-5'>.......</p>
    <p >Lorem ipsum dolor sit amet.</p>
</div>
</div>
</div>
        </div>
     
        </div>
  )
}

export default MainThree