import React from "react"
import User from "./User"

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            count:0, 
            
        }
    }

    render(){
        const {name,location} = this.props;
        const{count} = this.state;
        return <div className="user-card">
        <h1>Count :{count} This is from class based component</h1>
        <button onClick={()=>{
            //this.state.count = this.state.count+1 (This is incorrect. Never update the state variables direct as it would not update it directly)
            this.setState({
                count:this.state.count+1
            })
       }}> countIncrease</button>
        <h2>
            Name:{name}
        </h2>
        <h3>
            Location: {this.props.location}
        </h3>
        <h4>
            Contact: dhairyacodes87
        </h4>
    </div>
    }
}

export default UserClass;