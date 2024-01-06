import  swiggydata  from "../utils/restaurantMockData";
import Card from "./Card";
import  { useState ,useEffect} from "react";

const Body = () => {
    
    const [listOfRestaurants,setListOfRestaurants] =  useState(swiggydata)
    
useEffect (() => {
        fetchData();
    },[]);
const fetchData = async () => {
    const data  = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999",{mode:'no-cors'}   );
       
    const json = await data;
    console.log(json);
   
}   
    console.log("Body Rendered ");
    return (
            <div className="body">
                    <div className="filter">
                        <button className="filter-btn"
                        onClick={
                            () => {
                             const  filteredList = listOfRestaurants.filter((res)=> res.info.avgRating>4)
                               console.log(filteredList);
                                setListOfRestaurants(filteredList);
                            }
                           
                            }>
                            Top Rated Restaurant
                        </button>
                    </div>
                    <div className="card-container">
                            {
                                    listOfRestaurants.map(res => <Card key={res.info.id} resData={res}/>)
                            }                              
                    </div>
            </div>
    )
}

export default Body;