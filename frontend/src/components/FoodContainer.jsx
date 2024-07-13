import React from 'react'

import FoodCard from './FoodCard'
import { food_list } from '../assets/assets'

const FoodContainer = ({category}) => {

    
    
   // console.log(products)


  return (
    <div>
        <h1 className='text-2xl font-semibold mb-5'>Top dishes near you</h1>
        <div className=''>
        <div className='flex flex-wrap justify-center gap-4 gap-y-8 '>
            {
                food_list.map((product)=>
                    {
                        if(category==="All" || product.category === category){
                           return <FoodCard key={product["_id"]} product = {product} />
                        }
                    }
                    
                )
            }
        </div>
        
    </div>
    </div>
  )
}

export default FoodContainer