import React, { useEffect } from 'react'
import { food_list } from '../assets/assets'
import { useDispatch, useSelector } from 'react-redux'
import ItemCard from '../components/ItemCard'
import { getTotalAmount } from '../redux/cartSlice'

const CartPage = () => {

    
    const cartItems = useSelector((store)=>store.cart.items)
    const total = useSelector((store)=>store.cart.total)
   

  

  return (
    <div className='mt-10 min-h-[40vh]'>

        <div className='grid text-gray-500 grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr]'>
            <p className=''>Item</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>  
        </div>
        <br />
        <hr /> 

        {cartItems.map((item)=>(
            <ItemCard key={item.name}  item={item} />
        ))}

        <div className='mt-16 flex  gap-80 justify-between'>
            <div className=' flex-1 flex flex-col gap-2'>
                
                <h1 className='font-bold text-xl mb-5'>Cart Totals</h1>
                <div className=' text-gray-500 flex justify-between'>
                    <p>Subtotal</p>
                    <p>{total}</p>
                    
                </div>
                <hr />
                <div className=' text-gray-500 flex justify-between'>
                    <p>Delivery Fee</p>
                    <p>0</p>
                </div>
                <hr />
                <div className=' text-gray-500 flex justify-between'>
                    <p>Total</p>
                    <p></p>
                </div>

                <button className='w-[230px] mt-5 hover:bg-black/85 bg-black text-white py-2 rounded-sm px-2'>CHECKOUT TO PROCEED</button>
            </div>

            <div className='  flex flex-col gap-5'>
                <p>If you have a promo code, enter it here.</p>
                <div className='flex'>
                    <input placeholder='Enter promo' type="text" className='outline-none border pl-3' />
                    <button className='px-6 py-1 bg-orange-600 text-white'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartPage