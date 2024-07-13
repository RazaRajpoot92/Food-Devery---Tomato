import React from 'react'
import {assets} from "../assets/assets.js"

const AppDownload = () => {
  return (
    <div className='flex flex-col items-center gap-6 mt-24'>
        <h1 className='text-5xl font-semibold leading-tight text-center '>For Better Experience Download <br /> Tomato App</h1>
        <div className='flex justify-center gap-3'>
            <img className='w-[220px] ease-in-out duration-300 hover:scale-105 cursor-pointer' src={assets.play_store} alt="" />
            <img className='w-[220px] ease-in-out duration-300 hover:scale-105 cursor-pointer' src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload