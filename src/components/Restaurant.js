import {IMG_URL} from "../utils/constant";

const Restaurant = (props) => {
    const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla } = props?.food?.info;
    return(
        <>
        <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-400 rounded-lg">
            <img className="w-[100%] h-[200px] rounded-lg" src={ IMG_URL + cloudinaryImageId } />
            <h2 className="font-bold text-lg py-3">{name}</h2>
            <p> {cuisines.join(", ")} </p>
            <p>Rating: {avgRating} </p>
            <p>{costForTwo}</p>
            <p>{sla?.slaString}</p>
        </div>
     </>
    )
}

export default Restaurant;