import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import Menu from "./Menu";
import { MENU_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
    const [resData, setResData] = useState([]);
   useEffect(()=>{
    fetchMenu();
   },[]);

   const {resId} = useParams();
const fetchMenu = async () => {
    console.log(resId);
    console.log(MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER");
    const data = await fetch(MENU_URL + resId+"&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    console.log(json);
    setResData(tempRestData);
}
    
    return ( resData?.length===0 ? <Shimmer/> :
        <div>
            <h1></h1>
            <h2>Menu</h2>
        <div className="menu-container">
           
            {
                resData.map(res => <Menu key= {res.card?.info?.id} resData={res}/> )
            } 
            
        </div>
        </div>
    )
}

export default RestaurantMenu;