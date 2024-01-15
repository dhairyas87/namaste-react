import { MENU_IMAGE_URL, MENU_URL } from "../utils/constant";

const Menu = (props) => {
    const {resData} = props; 
    const {name,category,imageId,price} = resData?.card?.info;

    return (
        <div className="menu" >
                <img className="menu-item"
                src={MENU_IMAGE_URL+imageId}></img>
                <h3 className="menu-item">{name}</h3>
                <h4 className="menu-item">{price}</h4>
                <h4 className="menu-item"> {category}</h4>           
        </div>
    )
}



export default Menu;