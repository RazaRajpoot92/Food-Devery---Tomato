import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = ({setShowLogin}) => {

    const cartItems = useSelector((store)=>store.cart.items)
    const navigator = useLocation()
    const [active, setActive] = useState(navigator.pathname)
    
    console.log(navigator.pathname)

    const navLinks = [
        {
            name:"Home",
            path:"/"
        },{
            name:"Menu",
            path:"/menu"
        },
        {
            name:"Mobile-App",
            path:"mobile-app"
        },{
            name:"Contact Us",
            path:"/contact-us"
        }
    ]

  return (
    <div className=' flex justify-between items-center  h-[90px]'>
        <Link to={"/"} ><img className='w-36' src={assets.logo} alt="" /></Link>
        
        {/* Navigation links */}
        <div className='flex ml-10  gap-6 text-lg items-center'>
            {
                navLinks.map((item)=>(
                    <Link 
                        onClick={()=>setActive(item.path)}
                        className={`${active===item.path?'border-b-2 border-orange-500':""} pb-1 `}
                        key={item.name} 
                        to={item.path}>   
                        {item.name} </Link>
                ))
            }
        </div>
        
        

        <div className='flex gap-6 items-center'>
            <div className='flex gap-2 h-9 border border-gray-400 rounded-full p-2'>
                    <input type="text" className=' outline-none pl-2 text-gray-400 ' />
                    <img className='w-5 cursor-pointer' src={assets.search_icon} alt="" />
            </div>

            <div className='relative'>
                <div className='absolute -top-2 -right-3 min-w-6 min-h-6 bg-orange-600 rounded-full flex items-center justify-center text-white'>{cartItems.length}</div>
               <Link onClick={()=>setActive("/cart")} to={"/cart"}> <img src={assets.basket_icon} alt="" /> </Link>
            </div>
            <button onClick={()=>setShowLogin(true)} className='py-2 px-6 ease-in-out duration-300 text-white hover:bg-transparent hover:text-orange-500 border border-orange-500 bg-orange-600 rounded-lg'>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar