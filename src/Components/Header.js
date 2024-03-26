import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "./useOnlineStatus"
import UserContext from "./UserContext"
import {useSelector} from "react-redux"
const Header=()=>{
    const [login,setLogin]=useState("LogIn")
    const onlineStatus=useOnlineStatus()
    
   const {loggedInUser}=useContext(UserContext)
//    console.log(data)

const cartItems=useSelector((store)=>store.cart.items)
    return(
        <div className='flex justify-between bg-pink-100 shadow-lg mb-2'>
            <div className='logo-container'> 
                <img className='w-20' src="https://img.freepik.com/premium-vector/food-pin-app-icon-restaurant-location-logo-illustration_709422-33.jpg?w=740" alt=""/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4"> <Link to='/'>Home</Link> </li>
                    <li className="px-4"> <Link to='/about'>About us</Link> </li>
                    <li className="px-4"> <Link to='/contact'>Contact Us</Link> </li>
                    <li className="px-4"> <Link to='/cart'>Cart ({cartItems.length} items)</Link> </li>

                    <li className="px-4"> Online Status:{onlineStatus ? " Online" : " Offline"} </li>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
            <button className="login" onClick={()=>login==="LogIn"?setLogin("LogOut"):setLogin("LogIn")}>{login}</button>
        </div>
    )
}
export default Header