import { useContext } from "react"
import User from "./User"
import UserClass from "./UserClass"
import UserContext from "./UserContext"

const About=()=>{
    const {loggedInUser}=useContext(UserContext)
    return(
        <>
        <h1>About us</h1>
        <h1 className="font-bold">{loggedInUser}</h1>
        <User name="Febin Functional Component" location="Ireland"/>
        <UserClass name="Febin Class Component" location="Ireland"/>
        </>
    )
}
export default About