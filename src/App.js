
import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body  from "./components/Body";


 

 

// Not using indexes <<< Index as a key <<<<<<<<<<< unique Id as key

 
 
 const AppLayout = () => {
        return (
                <div className="app">
                     <Header></Header>
                     <Body></Body>
                </div>
        )
 }

 

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout></AppLayout>);