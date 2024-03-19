import React, { useEffect, useState } from 'react'
import { imgCdn } from '../utils/constants'
import { useParams } from 'react-router-dom'

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
    // const {name,avgRating,city,cloudinaryImageId}=resInfo?.cards[0]?.card?.card?.info
    // const{itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

  return (
    <div className='menu'>
        <img src={imgCdn+resInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId} alt="" srcset="" />
        <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
        <h3>{resInfo?.cards[0]?.card?.card?.info?.avgRating}</h3>
        <h3>{resInfo?.cards[0]?.card?.card?.info?.city}</h3>
        <h2>Menu</h2>
        <ul>
          
            {/* {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map((resMenu)=><li key={resMenu.card.info.id}>{resMenu.card.info.name} - {resMenu?.card?.info?.price/100}</li>)} */}
        </ul>
    </div>
  )
}

export default RestaurantMenu
