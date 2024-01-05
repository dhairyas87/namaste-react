import { CDN_URL } from "../utils/constant";


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
                    src={CDN_URL+cloudinaryImageId}></img>
                    <h3>{name}</h3>
                    <h4>{cuisines.join(", ")}</h4>
                    <h4>{avgRating} Stars</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{sla.deliveryTime} minutes</h4>
            </div>
    )
}

export default Card;