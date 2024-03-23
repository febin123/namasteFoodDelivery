import React, { useEffect, useState } from 'react'
import { imgCdn } from '../utils/constants'
import { useParams } from 'react-router-dom'
import ResCategory from './ResCategory'

const RestaurantMenu = () => {

    const[resInfo,setResInfo]=useState(null)

    const {resId}=useParams()
    useEffect(()=>{
        fetchMenu()
    },[])
    const fetchMenu=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
        const json=await data.json()
        console.log(json)
        setResInfo(json.data)
    }
    // const {name,avgRating,city}=resInfo?.cards[0]?.card?.card?.info
    // const{itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
    console.log(categories)
  return (
    <div className='text-center'>
       
        <h1 className='font-bold my-6 text-2xl'>{resInfo?.cards[0]?.card?.card?.info?.name}</h1> 
         <h3 className='font-bold text-lg'>{resInfo?.cards[0]?.card?.card?.info?.avgRating} Rating</h3>
        <h3>{resInfo?.cards[0]?.card?.card?.info?.city}</h3>
         {categories.map((category)=>(
            <ResCategory key={category?.card?.card?.title}data={category?.card?.card}/>
        ))} 
       
    </div>
  )
}

export default RestaurantMenu
