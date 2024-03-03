import  swiggydata  from "../utils/restaurantMockData";
import Card from "./Card";
import  { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";
import Search from "./Search";
import { Link } from "react-router-dom";
const Body = () => {
    
const [listOfRestaurants,setListOfRestaurants] =  useState([]);
const [searchText, setsearchText] = useState([]);
const [filteredRestaurant, setfilteredRestaurant] = useState([]);
useEffect (() => {
            fetchData();
          },[]);

const fetchData = async () => {
            const data  = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                const jsondata = await data.json();
                console.log(jsondata);
                console.log("Json data +"+jsondata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setListOfRestaurants(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setfilteredRestaurant(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                }
if(listOfRestaurants?.length==0){
    return <Shimmer></Shimmer>
}   
return (
            <div className="body">
                    <div className="filter">
                    <div className="search">
                            <input type="text" className="search-box" value={searchText} onChange={(e) =>{
                                setsearchText(e.target.value);
                            }}></input>
                            <button onClick={()=>{                            
                               const filteredrest =  listOfRestaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                               )
                               setfilteredRestaurant(filteredrest);
                            }}>Search</button>
                        </div>

                    
                        <button className="filter-btn"
                        onClick={
                            () => {
                             const  filteredList = listOfRestaurants.filter((res)=> res.info.avgRating>4)
                               console.log(filteredList);
                               setfilteredRestaurant(filteredList);
                            }
                           
                            }>
                            Top Rated Restaurant
                        </button>
                    </div>
                    <div className="card-container">
                            {
                                    filteredRestaurant.map((res) => 
                                    (
                                   <Link key={res.info.id} to = {"/restaurants/"+res.info.id}> <Card  resData={res}/> </Link>
                                    ))
                            }                              
                    </div>
            </div>
    )
}

export default Body;