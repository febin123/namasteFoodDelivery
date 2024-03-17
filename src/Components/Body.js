import { useEffect, useState } from "react";
import { resObj } from "../utils/constants"
import RestaurantCard from './RestaurantCard';

const Body=()=>{

    const[listOfRestaurant,setListOfRestaurant]=useState(resObj)

    useEffect(()=>{
        fetchData()
    },[])
   
    const fetchData=async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        
        const json=await data.json()
        console.log(json)
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

        setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }
    console.log("Body rendered")
    return(
        <div className='body'>
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList=listOfRestaurant.filter((rest) => rest.info.avgRating > 4);
                    // console.log(resObj)
                    setListOfRestaurant(filteredList)
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
              {
                listOfRestaurant.map((res=>
                    <RestaurantCard key={res.info.id} resData={res}/>))
              }
            
               
                
            </div>
        </div>
    )
}
export default Body