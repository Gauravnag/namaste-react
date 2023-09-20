import Restaurant from "./Restaurant";
import foodList from "../utils/dataList";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(foodList);
    return(
        <div className="body">
            <button className="filter-btn" 
            onClick={() => {
              const filterItem = listOfRestaurant.filter((res) => {
                return res.card.card.info.avgRating > 4
              });
              setListOfRestaurant(filterItem);
            }}
            >Top Restaurant</button>
            <div className="res_container">
               {
                listOfRestaurant.map((res) => {
                  return(
                    <Restaurant key={res.card.card.info.id} food={res} />
                  )
                })
               }
            </div>
        </div>
    )
}

export default Body;