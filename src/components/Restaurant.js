import {IMG_URL} from "../utils/constant";

const Restaurant = (props) => {
    const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla } = props?.food?.info;
    return(
        <>
        <div className="main_card">
            <img className="card_logo" src={ IMG_URL + cloudinaryImageId } />
            <h2>{name}</h2>
            <p> {cuisines.join(", ")} </p>
            <p>Rating: {avgRating} </p>
            <p>{costForTwo}</p>
            <p>{sla?.slaString}</p>
        </div>
     </>
    )
}

export default Restaurant;