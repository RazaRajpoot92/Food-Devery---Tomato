import React, { useState } from 'react'
import { assets } from '../assets/assets'

const LoginSginUp = ({setShowLogin}) => {

    const [isLogin, setIsLogin] = useState(false)
  return (
    <div className='w-full overflow-hidden h-screen fixed top-0 z-50 flex items-center justify-center bg-black/30'>
        <div className='bg-white min-w-[300px] animate-fadeIn w-[27vw] py-6 px-10 rounded-lg shadow-md'>
            <div className='flex justify-between mb-4'>
            <h1 className='text-orange-500 font-bold text-lg'>{isLogin?"Sign Up":"Login"}</h1>
            <img onClick={()=>setShowLogin(false)} className='size-4 cursor-pointer' src={assets.cross_icon} alt="" />
            </div>
            <form className='flex flex-col gap-4'>
                {               
                isLogin&&<input placeholder='Your name' className='border outline-none text-gray-500 p-2 rounded-md' type="text" required />              
                }
                <input placeholder='Your email' className='border outline-none text-gray-500  p-2 rounded-md' type="email" required />
                <input placeholder='Your password' className='border outline-none text-gray-500  p-2 rounded-md' type="password" required />
                <button className='bg-orange-500 text-white rounded-md py-2'>{isLogin?"Create account":"Sign In"}</button>
                <div className='flex text-sm items-start text-gray-600 gap-2'>
                    <input className='mt-1' required type="checkbox" />
                    <p>By continuing, I agree to the terms of use and privacy policy.</p>
                </div> 
            </form>

            <p className='mt-4 text-center text-gray-600'>{isLogin?"Already have an account?":"Don't have an acount?"} <span className='cursor-pointer text-orange-400' onClick={()=>setIsLogin(pre=>!pre)}>{isLogin?"Login here":"Create account"}</span></p>
        </div>
    </div>
  )
}

export default LoginSginUp