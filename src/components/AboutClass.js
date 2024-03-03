import React  from "react";
import UserClass  from "./UserClass";
class AboutClass extends React.Component{
    constructor(props){
        super(props);
     //   console.log("Parent Constructor")

        this.state = {};
    }
    render(){
     //   console.log("Parent Render Method");
       return <div>
        <h1>
            About 
        </h1>
        <div>
            This is Namaste React About Us Page
        </div>
       
        <UserClass/>
      
    </div>
    }
    componentDidMount(){
       // console.log("Parent Component Mounted (Loaded)");
    }
}

export default AboutClass;