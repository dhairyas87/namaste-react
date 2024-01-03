
import React from "react";
import ReactDOM from "react-dom/client";
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

 const  Card = () => {
        return (
                <div className="card" style={styleCard}>
                        <img src="https://assets.limetray.com/assets/image_manager/uploads/5128/Malamal%20Chicken%20Biryani%20(2).jpg"></img>
                        <h3>Meghana Foods</h3>
                </div>
        )
 }

 const Body = () => {
        return (
                <div className="body">
                        <div className="search">
                                Search
                        </div>
                        <div className="card-container">
                                <Card></Card>
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