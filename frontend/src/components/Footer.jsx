import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' bg-slate-800 flex flex-col items-center  mt-32 text-white py-10'>

        <div className='flex justify-around'>
            <div className='flex flex-col w-[40%] gap-5'>
                <img className='w-[150px]' src={assets.logo} alt="" />
                <p className='text-gray-200'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius ullam aliquam labore magni recusandae! Dolores, officia quaerat, accusamus repudiandae adipisci earum nesciunt qui minima repellat nihil voluptatem vel alias.</p>
                <div className='flex gap-3'>
                    <img className='w-[40px]' src={assets.facebook_icon} alt="" />
                    <img className='w-[40px]' src={assets.twitter_icon} alt="" />
                    <img className='w-[40px]' src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className=' flex flex-col gap-1'>
                <h2 className='font-bold text-lg mb-2'>COMPANY</h2>
                <Link>Home</Link>
                <Link>About us</Link>
                <Link>Delivery</Link>
                <Link>Privacy Policy</Link>
            </div>

            <div className='flex flex-col gap-1'>
                <h2 className='font-bold text-lg mb-2'>GET IN TOUCH</h2>
                <p>+9202220222</p>
                <p>tomato@gamil.com</p>
            </div>
        </div>

        <hr className='my-5 w-[88%] h-[2px]' />

        <p className='text-center'>Copyright 2024 @ Tomato.com - All Rights resevered</p>
        

    </div>
  )
}

export default Footer