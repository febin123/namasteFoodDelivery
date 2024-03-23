import { useEffect, useState } from "react";
import RestaurantCard, { withHeaderLabel } from './RestaurantCard';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const Body=()=>{

    const[listOfRestaurant,setListOfRestaurant]=useState([])

    const[searchRes,setSearchRes]=useState([])
    const[searchText,setSearchText]=useState("")

    const RestaurantCardOffer=withHeaderLabel(RestaurantCard)
    useEffect(()=>{
        fetchData()
    },[])
   
    console.log("Hello",listOfRestaurant)
    const fetchData=async()=>{
        const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        
        const json=await data.json()
        console.log(json)
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setSearchRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    console.log("Body rendered")

    // if(listOfRestaurant.length==0){
    //     return(
    //         <Shimmer/>
    //     )
    // }
    const onlineStatus=useOnlineStatus()
    if(useOnlineStatus===false){
        return(
            <h1>Looks like you are OFffline</h1>
        )
    }
    return(
        <div className='body'>
            <div className="filter flex">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                    const searchRestaurant=listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setSearchRes(searchRestaurant)
                    }}>Search</button>
                </div>
                <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" onClick={()=>{
                    const filteredList=listOfRestaurant.filter((rest) => rest.info.avgRating > 4);
                    // console.log(resObj)
                    setSearchRes(filteredList)
                }}>Top Rated Restaurant</button>
            </div>
            <div className="flex flex-wrap">
              {
                searchRes.map((res=>
                   <Link  key={res.info.id} to={"/restaurants/"+res.info.id}>
                
                   {res?.info?.aggregatedDiscountInfoV3?.subHeader?.includes("UPTO") ? (<RestaurantCardOffer resData={res}/>):(<RestaurantCard resData={res}/>)}
                   </Link>  ))
              }
            
               
                
            </div>
        </div>
    )
}
export default Body