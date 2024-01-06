import  swiggydata  from "../utils/restaurantMockData";
import Card from "./Card";
import  { useState ,useEffect} from "react";

const Body = () => {
    
    const [listOfRestaurants,setListOfRestaurants] =  useState(swiggydata)
    
  useEffect (() => {
        console.log("Use Effect callled");
    },[]);
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