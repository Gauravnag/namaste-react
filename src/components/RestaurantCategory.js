import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    const [showItems, setShowItems] = useState(false);
    const handleClick = ()=> {
        setShowItems(!showItems);
    }
    return(
        <div className="shadow-md mb-5 p-4 bg-gray-100">
            <div className="font-bold flex justify-between cursor-pointer" onClick={handleClick}>
                <span>{data?.title} - ({data.itemCards.length}) </span>
                <span>Up arrow</span>
            </div>

            {showItems && <ItemList items={data?.itemCards} /> }
        </div>

    )
}
export default RestaurantCategory;