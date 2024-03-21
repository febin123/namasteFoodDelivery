import { useState } from "react"

const User=(props)=>{
    const [coount,setCount]=useState(0)
    return(
        <div className="user-card">
        <h1>{props.name}</h1>
        <h1>{props.location}</h1>
        <h1>{coount}</h1>
        <button onClick={()=>setCount(coount+1)}>+</button>
      </div>
    )
}
export default User