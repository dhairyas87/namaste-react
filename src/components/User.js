import { useState } from "react";

const User = () => {

    const[count] = useState(0);
    const[count2] = useState(1);
    
    return <div className="user-card">
       <h1> Count = {count} This is from functional Component</h1>
       <h1> Count2 = {count2} This is from functional Component</h1>
        <h2>
            Name:Dhairya
        </h2>
        <h3>
            Location: Sydney
        </h3>
        <h4>
            Contact: dhairyacodes87
        </h4>
    </div>
}

export default User;