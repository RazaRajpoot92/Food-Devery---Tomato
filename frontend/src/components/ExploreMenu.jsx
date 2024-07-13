import React from 'react'
import { menu_list } from '../assets/assets'
import Slider from "react-slick"



const ExploreMenu = ({category, setCategory}) => {
   


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1
      };
    
    
  return (
    <div className='my-10'>
       
        <div className='flex gap-4 flex-col items-center'>
            <h1 className='text-[3vw] text-gray-700 font-bold'>Explore our menu</h1>
            <p className='w-[50%]'>Experience the best meals from your favorite local restaurants delivered straight to your door. With just a few taps, enjoy a wide variety of cuisines,</p>
        </div>
        
        <div className=' mt-8  '>
           <Slider {...settings}>
                {
                    menu_list.map((item)=>(
                        <div key={item.menu_name}>
                            <div className='flex flex-col gap-2 items-center'>
                                <img
                                onClick={()=>setCategory(pre => pre===item.menu_name?"All":item.menu_name)}
                                className={`min-w-[120px] cursor-pointer ${category===item.menu_name&&" border-orange-500 "} border-4 rounded-full`} src={item.menu_image} alt="" />
                                <p className='text-lg'>{item.menu_name}</p>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    </div>
  )
}

export default ExploreMenu