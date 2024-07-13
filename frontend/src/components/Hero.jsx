import React from 'react'
import header_img from '../assets/header_img.png'

const Hero = () => {
  return (
    <div style={{backgroundImage:`url(${header_img})`}} className=' relative overflow-hidden flex items-end pb-5 px-5 md:pb-10 text-white md:pl-20 w-full min-h-[80vh] 2xl:min-h-[70vh] bg-cover bg-center rounded-2xl'>
        
        <div className='absolute inset-0 bg-black/5'></div>

        <div className=' animate-fadeIn  w-full lg:w-[55%] relative z-10'>
            <h1 className=' text-[18px] md:text-[4vw] mb-4 font-semibold'>Order your <br /> favourite food here</h1>
            <p className='text-[14px] md:text-[16px]'>Experience the best meals from your favorite local restaurants delivered straight to your door. With just a few taps, enjoy a wide variety of cuisines, all freshly prepared and delivered hot and fast. Craving comfort food, a healthy salad, or exotic flavors? We've got you covered.</p>
            <button className='bg-white hover:bg-transparent border-white border hover:text-white ease-in-out duration-300 text-black py-3 px-7 mt-6 rounded-full'>View Menu</button>
        </div>
     
        
    </div>
  )
}

export default Hero