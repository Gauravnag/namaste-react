import { useEffect, useState } from "react";
import { MENU_ITEM } from "../utils/constant";

const useRestaurantMenu = (resId) => {
    const [menuItem, setMenuItem] = useState(null);
    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data = await fetch(MENU_ITEM + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const jsonData = await data.json();
        setMenuItem(jsonData.data)
    }
    return menuItem;
}
export default useRestaurantMenu;