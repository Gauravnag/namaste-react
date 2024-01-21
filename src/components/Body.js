import Restaurant from "./Restaurant";
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

  const fetchData = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonConvert = await data.json();
    console.log(jsonConvert?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // Optional chaining
    setListOfRestaurant(jsonConvert?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfFilterRest(jsonConvert?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

 const onlineStatus = useStatusOnline();
 if(onlineStatus === false) return <h1>Your internet connection is disconnected</h1>

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">

              <div className="search">
                <input type="text" value={searchText} onChange={(e) => {setSearchText(e.target.value)}} />
                <button onClick={
                  () => {
                    const filteredItems = listOfRestaurant.filter((res) => {
                                        return res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase());
                                      });
                                      setListOfFilterRest(filteredItems);
                  }
                }> Search</button>
              </div>
            
              <button className="filter-btn" 
              onClick={() => {
                const filterItem = listOfRestaurant.filter((res) => {
                  return res.info.avgRating > 4.2;
                });
                setListOfFilterRest(filterItem);
              }}
              >Top Restaurant</button>
            </div>
            <div className="res_container">
               {
                listOfFilterRest.map((res) => {
                  return(
                   <Link key={res.info.id} to={"/restaurants/" + res.info.id}> <Restaurant  food={res} /> </Link>
                  )
                })
               }
            </div>
        </div>
    )
}

export default Body;