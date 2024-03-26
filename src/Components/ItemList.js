import { useDispatch } from "react-redux"
import { imgCdn } from "../utils/constants"
import { addItem } from "../utils/cartSlice"

const ItemList=({items})=>{
    console.log(items)

    const dispatch=useDispatch();

    const handleAddItem=(item)=>{
        dispatch(addItem(item))
    }
    return(
        <div>
            
                {items.map((item)=><div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left">
                    <div className="w-3/12 p-4">
                    <img src={imgCdn+item.card.info.imageId} className="w-full" />
                    <button className="p-1 mx-7 rounded-lg bg-black text-white shadow-md"
                    onClick={()=>handleAddItem(item)}>Add+</button>
                    </div>
                    <div className="py-2">
                        <span>{item.card.info.name}</span> 
                        <span> - ₹{item.card.info.price/100}</span> 
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>)}
            
        </div>
    )
}
export default ItemList