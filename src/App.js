
import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body  from "./components/Body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";


 

 

// Not using indexes <<< Index as a key <<<<<<<<<<< unique Id as key

 
 
 const AppLayout = () => {
        console.log(<Body/>)
        return (
                <div className="app">
                     <Header></Header>
                     <Body></Body>
                </div>
        )
 }

 const appRouter = createBrowserRouter([{
        path:"/",
        element: <AppLayout/>,
        errorElement:<Error/>
 },{
        path:"/about",
        element:<About/>
 },{
        path:"/contactUs",
        element:<ContactUs/>
 }])

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRouter}/>);