import { useContext } from "react";
import {IMG_URL} from "../utils/constant";
import UserContext from "../utils/UserContext";

const Restaurant = (props) => {
    const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla } = props?.food?.info;
    const {loggingUser} = useContext(UserContext);
    return(
        <>
        <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-400 rounded-lg">
            <img className="w-[100%] h-[200px] rounded-lg" src={ IMG_URL + cloudinaryImageId } />
            <h2 className="font-bold text-lg py-3">{name}</h2>
            <p> {cuisines.join(", ")} </p>
            <p>Rating: {avgRating} </p>
            <p>{costForTwo}</p>
            <p>{sla?.slaString}</p>
            <p className="font-bold">{loggingUser}</p>
        </div>
     </>
    )
}

 export const WithPromotion = (Restaurant) => {
    return (props) => {
        return(
            <>
                <label className="absolute bg-orange-300">Promotion</label>
                <Restaurant {...props} />
            </>
        )
    }
}

export default Restaurant;