
import React from "react";
import ReactDOM from "react-dom/client";
import { swiggydata } from "./restaurantdata.js";
/*
App
        -> Header
                -> Logo
                -> Nav Items
        -> Body
                -> Search Component
                -> Restaurant card container
                -> Restaurant Card
        -> Footer
                -> Links (Address, Contact Info)
                -> Copyright
*/

const Header = () => {
        return (
                <div className="header">
                        <div className="logo-container">
                                <img className="logo" src = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
                        </div>
                        <div className="nav-items">
                                <ul>
                                        <li>Home</li>
                                        <li>About Us</li>
                                        <li>Contact Us</li>
                                        <li>Cart</li>
                                </ul>
                        </div>

                </div>
        )
 }
 const styleCard = {
        backgroundColor : "#f0f0f0"
 }

 const  Card = (props) => {
        const {resData} = props; 
        const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,sla} = resData?.info;
        return (
                <div className="card" style={styleCard}>
                        <img 
                        className="card-logo"
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
                        <h3>{name}</h3>
                        <h4>{cuisines.join(", ")}</h4>
                        <h4>{avgRating} Stars</h4>
                        <h4>{costForTwo}</h4>
                        <h4>{sla.deliveryTime} minutes</h4>
                </div>
        )
 }

// Not using indexes <<< Index as a key <<<<<<<<<<< unique Id as key

 const Body = () => {
        return (
                <div className="body">
                        <div className="search">
                                Search
                        </div>
                        <div className="card-container">
                                {
                                        swiggydata.map(res => <Card key={res.info.id} resData={res}/>)
                                }                              
                        </div>
                </div>
        )
 }
 
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