import { useEffect, useState } from "react";
import RestaurantCard from './RestaurantCard';
import Shimmer from "./Shimmer";

const Body=()=>{

    const[listOfRestaurant,setListOfRestaurant]=useState([])

    const[searchRes,setSearchRes]=useState([])
    const[searchText,setSearchText]=useState("")
    useEffect(()=>{
        fetchData()
    },[])
   
    const fetchData=async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        
        const json=await data.json()
        console.log(json)
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setSearchRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    console.log("Body rendered")

    if(listOfRestaurant.length==0){
        return(
            <Shimmer/>
        )
    }
    return(
        <div className='body'>
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                    <button onClick={()=>{
                    const searchRestaurant=listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setSearchRes(searchRestaurant)
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList=listOfRestaurant.filter((rest) => rest.info.avgRating > 4);
                    // console.log(resObj)
                    setSearchRes(filteredList)
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
              {
                searchRes.map((res=>
                    <RestaurantCard key={res.info.id} resData={res}/>))
              }
            
               
                
            </div>
        </div>
    )
}
export default Body