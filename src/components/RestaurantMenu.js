// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import { MENU_ITEM } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useStatusOnline from "../utils/useStatusOnline";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    // const [menuItem, setMenuItem] = useState(null);

    const {resId} = useParams();

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async() => {
    //     const menuData = await fetch(MENU_ITEM + resId + "&catalog_qa=undefined&submitAction=ENTER");
    //     const jsonData = await menuData.json();
    //     setMenuItem(jsonData.data);
    // }

    const menuItem = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    if(menuItem === null) return <Shimmer />;

    const {cuisines, name, costForTwoMessage} = menuItem?.cards[0]?.card?.card?.info;

    const { itemCards } = menuItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;

    const categories = menuItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(e => e.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );

    return(
        <div className="w-[1200px] m-auto">
            <h1 className="font-bold mb-5 text-center">Restaurant Menu</h1>
            <p className="font-bold"> {name} </p>
            <p className="text-gray-500 text-xs mb-3"> {cuisines.join(", ")} - {costForTwoMessage} </p>
            {/* <ul>
               { itemCards.map((item) =>  <li key={item.card.info.id}> {item.card.info.name} - {"Rs."}{item.card.info.price/100 || item.card.info.defaultPrice/100} </li> ) }
            </ul> */}
            {categories.map((e, index) => <RestaurantCategory key={e.card?.card?.title} data={e.card?.card} showItems={index == showIndex ? true : false } setIndex={() => setShowIndex(index) }  />)}
          
        </div>
    )
}
export default RestaurantMenu;