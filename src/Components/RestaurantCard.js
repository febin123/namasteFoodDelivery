import { imgCdn } from "../utils/constants"

const RestaurantCard=(props)=>{
    const {name,areaName,avgRating,cloudinaryImageId}=props?.resData?.info
    return(
        <div className='res-card'>
             <img src={imgCdn+cloudinaryImageId} className="res-logo" alt="" />
            <h3>{name}</h3>
            <h4>{areaName}</h4>
            <h4>{avgRating}</h4>
           
        </div>
    )
}
export default RestaurantCard