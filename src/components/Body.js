import  swiggydata  from "../utils/restaurantMockData";
import Card from "./Card";
const Body = () => {
    return (
            <div className="body">
                    <div className="filter">
                        <button className="filter-btn"
                        onClick={
                            () => {console.log("Button Clicked ")}
                            }>
                            Top Rated Restaurant
                        </button>
                    </div>
                    <div className="card-container">
                            {
                                    swiggydata.map(res => <Card key={res.info.id} resData={res}/>)
                            }                              
                    </div>
            </div>
    )
}

export default Body;