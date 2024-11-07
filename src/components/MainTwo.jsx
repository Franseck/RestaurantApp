import { BiFoodMenu } from "react-icons/bi";
import bir1 from "../assets/biryani.png"
import bir2 from "../assets/biryani2.png"
import bir3 from "../assets/biryani3.png"
import bir4 from "../assets/biryani5.png"


const MainTwo = () => {
  return (
<div className='bg-third'>
<div className="container py-14 relative">
    <div>
        <h1 className='py-8 tracking-wider text-3xl font-general text-center '>Taste the Difference</h1>
<div className='space-y-10'>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
<div>
    <p className='font-fewer'>
        <span className='text-red-800'> Passion </span>
   enough for the whole world to savor but proudly and distinctly, hecho en México. The tradition, creativity and passion of our people and homeland, baked into our DNA. 
    <br /> 
    <span className='text-red-800'> Solo y siempre, Por Amor. Salud. </span>
    </p>
</div>
<div></div>
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
        <div></div>
<div>
    <p className='font-fewer'>
                The legend begins in 1942, when a young <span className='text-red-800'>Don Julio González  </span> sees a once in a lifetime opportunity in tequila production. He didn't own much, but what he did possess was a dream and the singular devotion needed to bring it to life. <br /> 
    <span className='text-red-800'> Solo y siempre, Por Amor. Salud. </span>
    </p>
</div>
    </div>
</div>

<div className='flex justify-center mt-10 sm:mt-14 cursor-pointer hover:text-secondary hover:scale-105 duration-300 font-general'>
<button className="btn glass btn-warning ">Appetizers Menu <BiFoodMenu className="text-lg" /></button>
</div>
    </div>
<div className="absolute top-5 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-70">
    <img src={bir1} alt="" data-aos="fade-right" className="bir"/>
</div>

<div data-aos="fade-down-right"  className="absolute  bottom-1 -left-18 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-70">
    <img src={bir2} alt="" className="bir"/>
</div>
<div data-aos="zoom-in" className="absolute top-1/2 -translate-y-1/2  left-1/3 opacity-50 sm:opacity-70">
    <img src={bir3} alt="" className="bir"/>
</div>
<div data-aos="fade-down-right" className="absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-70">
    <img src={bir4} alt="" className="bir"/>
</div>

    </div>


</div>
  )
}

export default MainTwo