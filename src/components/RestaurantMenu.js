import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_ITEM } from "../utils/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [menuItem, setMenuItem] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async() => {
        const menuData = await fetch(MENU_ITEM + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const jsonData = await menuData.json();
        setMenuItem(jsonData.data);
    }

    if(menuItem === null) return <Shimmer />;

    const {cuisines, name, costForTwoMessage} = menuItem?.cards[0]?.card?.card?.info;

    const { itemCards } = menuItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;

    return(
        <>
            <h1>Restaurant Menu</h1>
            <p> {name} </p>
            <p> {cuisines.join(", ")} - {costForTwoMessage} </p>
            <ul>
               { itemCards.map((item) =>  <li key={item.card.info.id}> {item.card.info.name} - {"Rs."}{item.card.info.price/100 || item.card.info.defaultPrice/100} </li> ) }
            </ul>
        </>
    )
}
export default RestaurantMenu;