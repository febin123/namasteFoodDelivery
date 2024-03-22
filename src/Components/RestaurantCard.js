import { imgCdn } from "../utils/constants"

const RestaurantCard=(props)=>{
    const {name,areaName,avgRating,cloudinaryImageId}=props?.resData?.info
    return(
        <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-400'>
 
             <img src={imgCdn+cloudinaryImageId} className="rounded-lg" alt="" />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{areaName}</h4>
            <h4>{avgRating}</h4> 
           
        </div>
    )
}

//Higher order function
export const withHeaderLabel=(RestaurantCard)=>{
    return(props)=>{
        return(
        <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">{props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader || "props?.resData?.info?.aggregatedDiscountInfoV3?.header"}  </label>
            <RestaurantCard {...props}/>
        </div>
        )
    }
}
export default RestaurantCard