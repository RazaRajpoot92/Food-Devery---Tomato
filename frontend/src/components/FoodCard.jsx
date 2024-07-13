import React from 'react';
import { assets } from '../assets/assets';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/cartSlice';

const FoodCard = ({ product }) => {
    const { name, image, price, description, _id } = product;

    const cartItems = useSelector((store) => store.cart.items);
    const item = cartItems.find((item) => item._id === _id);
    const quantity = item ? item.qty : 0;

    const dispatch = useDispatch();

    const handleAddItem = (product) => {
        dispatch(addItem(product));
    };

    const handleRemoveItem = (product) => {
        dispatch(removeItem(product));
    };

    return (
        <div className='relative animate-fadeIn w-[280px] border rounded-2xl shadow-lg'>
            <img className='w-full rounded-t-2xl' src={image} alt="" />
            {quantity === 0 ? (
                <img
                    onClick={() => handleAddItem(product)}
                    className='absolute bottom-40 right-3 w-10 cursor-pointer rounded-full'
                    src={assets.add_icon_white}
                    alt=""
                />
            ) : (
                <div className='absolute bottom-40 right-3 flex items-center gap-4 bg-white p-2 rounded-full'>
                    <img
                        className='w-8 cursor-pointer'
                        onClick={() => handleAddItem(product)}
                        src={assets.add_icon_green}
                        alt=""
                    />
                    <p className='text-gray-500'>{quantity}</p>
                    <img
                        className='w-8 cursor-pointer'
                        onClick={() => handleRemoveItem(product)}
                        src={assets.remove_icon_red}
                        alt=""
                    />
                </div>
            )}

            <div className='p-4 flex flex-col gap-2'>
                <div>
                    <h2 className='text-lg'>{name}</h2>
                </div>
                <p className='text-sm text-gray-400'>{description}</p>
                <h1 className='text-2xl font-semibold text-orange-600 '>{price}$</h1>
            </div>
        </div>
    );
};

export default FoodCard;
