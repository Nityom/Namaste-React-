import React from 'react'
import { CDN_URL } from '../utils/contants'

const ItemList = ({items}) => {
    console.log(items)
  return (
    <div>
        {items.map(item=> <div key={item.card.info.id} className='p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between'>
    
 
 <div className='w-9/12'>
     


<div className='py-2'>
    
    <span className='font-semibold'>{item.card.info.name}</span>
    <span>- ₹{item.card.info.price
    ? item.card.info.price/100
     : item.card.info.defaultPrice }</span>



</div>
<p className='text-xs'>{item.card.info.description}</p>
</div>
<div className='rounded-lg ml-5 '>
                <button className='bg-black text-white p-2 shadow-lg  m-auto rounded-lg'>Add +
                </button>
            </div>
            <img src= {CDN_URL+ item.card.info.imageId } alt="food-image" className='w-40  rounded-lg' />
        </div>
     )}
    </div>
  )
}

export default ItemList
