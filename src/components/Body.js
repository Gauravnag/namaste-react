import Restaurant, {WithPromotion} from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useStatusOnline from "../utils/useStatusOnline";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [listOfFilterRest, setListOfFilterRest] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
    fetchData();
  }, [])

  const RestaurantWithPromotion = WithPromotion(Restaurant);

  const fetchData = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonConvert = await data.json();
    // console.log(jsonConvert?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // Optional chaining
    setListOfRestaurant(jsonConvert?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfFilterRest(jsonConvert?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

 const onlineStatus = useStatusOnline();
 if(onlineStatus === false) return <h1>Your internet connection is disconnected</h1>

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex bg-yellow-100">

              <div className="p-4">
                <input className="border-2 rounded-sm" type="text" value={searchText} onChange={(e) => {setSearchText(e.target.value)}} />
                <button className="px-4 py-1 ml-2 rounded-sm bg-blue-100" onClick={
                  () => {
                    const filteredItems = listOfRestaurant.filter((res) => {
                                        return res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase());
                                      });
                                      setListOfFilterRest(filteredItems);
                  }
                }> Search</button>
              </div>
              <div className="flex items-center ml-10">
                <button className="px-4 py-1 rounded-sm bg-blue-100" 
                onClick={() => {
                  const filterItem = listOfRestaurant.filter((res) => {
                    return res.info.avgRating > 4.2;
                  });
                  setListOfFilterRest(filterItem);
                }}
                >Top Restaurant</button>
              </div>
              
            </div>
            <div className="flex flex-wrap">
               {
                listOfFilterRest.map((res) => {
                  return(
                   <Link key={res.info.id} to={"/restaurants/" + res.info.id}> 
                      { res.info.availability.opened ? <RestaurantWithPromotion food={res} />  : <Restaurant  food={res} /> }
                    {/* <Restaurant  food={res} />  */}
                   </Link>
                  )
                })
               }
            </div>
        </div>
    )
}

export default Body;