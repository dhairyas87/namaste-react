import React from "react"
import User from "./User"
import {USER_GITHUB_URL} from "../utils/constant"
class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            userInfo:{
                name:"Dummy",
                location:"TempDummy",
                avatar_url:"temp"
            }
        }
    }

    render(){
      
        const{name,location,avatar_url} =this.state.userInfo;
        return <div className="user-card">
        <img src = {avatar_url}></img>
        <h2>
            Name:{name}
        </h2>
        <h3>
            Location: {location}
        </h3>
        <h4>
            Contact: dhairyacodes87
        </h4>
    </div>
    }
   async componentDidMount(){
        console.log("Child Component Mounted (Loaded)");
        const data = await fetch(USER_GITHUB_URL);
        const json = await data.json();
        console.log(json);
        console.log(json.name);
        this.setState({
            userInfo:json
        })
    }
}

export default UserClass;