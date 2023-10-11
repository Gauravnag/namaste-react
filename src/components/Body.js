import Restaurant from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [listOfFilterRest, setListOfFilterRest] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonConvert = await data.json();
    // Optional chaining
    setListOfRestaurant(jsonConvert?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfFilterRest(jsonConvert?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(jsonConvert?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

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
                  return res.info.avgRating > 4
                });
                setListOfRestaurant(filterItem);
              }}
              >Top Restaurant</button>
            </div>
            <div className="res_container">
               {
                listOfFilterRest.map((res) => {
                  return(
                    <Restaurant key={res.info.id} food={res} />
                  )
                })
               }
            </div>
        </div>
    )
}

export default Body;