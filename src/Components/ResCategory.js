import { useState } from 'react';
import ItemList from './ItemList';
const ResCategory=({data})=>{
// console.log(data)

const [showItems,setShowItems]=useState(false)

const handleClick=()=>{
setShowItems(!showItems)
}
    return(
        <div>
        <div className="w-6/12 m-auto my-4 bg-gray-100 shadow-lg p-4">
            <div className=' flex justify-between cursor-pointer' onClick={handleClick}>
            <span className="text-lg font-bold">{data.title} - {data.categories[0].itemCards.length}</span>
            <span>👇</span>
            </div>
            {showItems && <ItemList items={data?.categories[0]?.itemCards} />}
        </div>
        
        </div>
    )
}
export default ResCategory