
import React from "react";
import ReactDOM from "react-dom/client";
 
 //ReactDOM.create Element creates a React Element and when we render to DOM then only it become the HTML element.

 const root = ReactDOM.createRoot(document.getElementById("root"));

 const heading =  React.createElement(
        "h1",
        {id:"heading"},
        "Namaste React"
 )

 root.render(heading);