import React from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({data,showItems,setShowIndex,dummy}) => {

// const [showItems,setShowItems ] =useState(false);


    const handleClick =()=>{
setShowIndex();
    }
  return (
    <div>
      {/* Heaader */}
      <div className='w-6/12 my-4 mx-auto bg-gray-100  shadow-lg p-4 rounded-lg'>
      <div className='flex justify-between cursor-pointer 'onClick={handleClick}>
         <span className='font-bold text-lg'>{data.title} 
        ({data.itemCards.length}) </span>
        <span>⬇️</span>
      </div>



       {showItems && <ItemList items={data.itemCards} dummy={dummy}/>}
        </div>
    {/* Accordian Body */}
   
    </div>
  )
}

export default RestaurantCategory
