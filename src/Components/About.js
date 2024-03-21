import User from "./User"
import UserClass from "./UserClass"

const About=()=>{
    return(
        <>
        <h1>About us</h1>
        <User name="Febin Functional Component" location="Ireland"/>
        <UserClass name="Febin Class Component" location="Ireland"/>
        </>
    )
}
export default About