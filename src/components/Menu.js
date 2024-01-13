import { MENU_URL } from "../utils/constant";

const Menu = (props) => {
    const {resData} = props; 
    const {name,category,imageId,price} = resData?.card?.info;

    return (
        <div className="menu" >
                <img className="menu-logo"
                src={MENU_URL+imageId}></img>
                <h3>{name}</h3>
               
              
                <h4>{price}</h4>
                <h4> {category}</h4>
                
        </div>
    )
}



export default Menu;