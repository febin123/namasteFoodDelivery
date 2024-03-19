import { useState } from "react"
import { Link } from "react-router-dom"
const Header=()=>{
    const [login,setLogin]=useState("LogIn")
    return(
        <div className='header'>
            <div className='logo-container'> 
                <img className='logo' src="https://img.freepik.com/premium-vector/food-pin-app-icon-restaurant-location-logo-illustration_709422-33.jpg?w=740" alt=""/>
            </div>
            <div className="nav-items">
                <ul>
                    <li> <Link to='/'>Home</Link> </li>
                    <li> <Link to='/about'>About us</Link> </li>
                    <li> <Link to='/contact'>Contact Us</Link> </li>
                    <li>Cart</li>
                </ul>
            </div>
            <button className="login" onClick={()=>login==="LogIn"?setLogin("LogOut"):setLogin("LogIn")}>{login}</button>
        </div>
    )
}
export default Header