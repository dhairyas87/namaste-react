import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import Menu from "./Menu";

const RestaurantMenu = () => {
    const [resData, setResData] = useState([]);
   useEffect(()=>{
    fetchMenu();
   },[]);
const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=808133&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    console.log(json);
    const tempRestData = await json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    setResData(tempRestData);
    console.log(tempRestData);
   
}
    
    return ( resData.length===0 ? <Shimmer/> :
        <div>
            <h1></h1>
            <h2>Menu</h2>
        <div className="menu-container">
           
            {
                resData.map(res => <Menu key= {resData.card?.info?.id} resData={res}/>)
            } 
            
        </div>
        </div>
    )
}

export default RestaurantMenu;