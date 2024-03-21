import React from "react"

class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            userInfo:{
                name:"Abc",
                location:"xyz",
                avatar_url:"http://www.google.com"
            }
        }
    }
    async componentDidMount(){
        console.log("Component ddidMount")
        const data=await fetch("https://api.github.com/users/febin123")
        const json=await data.json()
        console.log(json)
        this.setState({
            userInfo:json
        })
    }
    render(){
        return(
        <div className="user-card">
         <h1>{this.state.userInfo.name}</h1>
         <h1>{this.state.userInfo.location}</h1>
         <img src={this.state.userInfo.avatar_url} alt="" srcset="" />
         <h1>{this.state.count}</h1>
       
       </div>
        )
    }
}
export default UserClass