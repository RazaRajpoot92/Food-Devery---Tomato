import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../redux/cartSlice'

const ItemCard = ({item}) => {
    const {image,price,name,qty} = item
    const dispatch = useDispatch()
  return (
    <div>
            <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center my-5'>
                <img className='w-16 rounded-sm' src={image} alt="" />
                <p>{name}</p>
                <p>${price}</p>
                <p>{qty}</p>
                <p>${price*qty}</p>
                <p onClick={()=>dispatch(removeItem(item))} className='text-xl cursor-pointer'>x</p>
            </div>

            
            <hr className='h-[2px]' />
        </div>
  )
}

export default ItemCard