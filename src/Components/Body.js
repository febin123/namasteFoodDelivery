import { useState } from "react";
import { resObj } from "../utils/constants"
import RestaurantCard from './RestaurantCard';

const Body=()=>{

    const[listOfRestaurant,setListOfRestaurant]=useState(resObj)
   
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