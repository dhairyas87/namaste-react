
import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body  from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import AboutClass from "./components/AboutClass";


 

 

// Not using indexes <<< Index as a key <<<<<<<<<<< unique Id as key

 
 
 const AppLayout = () => {
      //  console.log(<Body/>)
        return (
                <div className="app">
                     <Header></Header>
                     <Outlet/>
                </div>
        )
 }

 const appRouter = createBrowserRouter([{
        path:"/",
        element: <AppLayout/>,
        children:[
              {
                     path:"/",
                     element:<Body/>,
                   //  errorElement:<Error/>
              },
              {
                     path:"/about",
                     element:<About/>
              },
              {
                     path:"/aboutClass",
                     element:<AboutClass/>      
              },
              
              {
                     path:"/contactUs",
                     element:<ContactUs/>
              },{
                     path:"/restaurants/:resId",
                     element:<RestaurantMenu/>
              }
        ],
        errorElement:<Error/>
 },])

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRouter}/>);