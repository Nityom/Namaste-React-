import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // Local State Variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted= withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.096409658061162&lng=79.10369083285332&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      // Optional Chaining
      const restaurants =
        json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      console.log("Fetched restaurants:", restaurants);

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };


  const handleSearch = () => {
    console.log("Search text:", searchText);
    const filtered = listOfRestaurants.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log("Filtered restaurants:", filtered);
    setFilteredRestaurant(filtered);
  };

  const handleTopRated = () => {
    console.log("Filtering top rated restaurants...");
    const filteredList = listOfRestaurants.filter(
      (res) => res?.info?.avgRating > 4
    );
    console.log("Top rated restaurants:", filteredList);
    setFilteredRestaurant(filteredList);
  };

const onlineStatus = useOnlineStatus();

if(onlineStatus===false)return <h1>
  Look's like you are offline!! Please check your internet connection
</h1>


const {loggedInUser,setUserName} = useContext(UserContext);


  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex ">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid-black  " 
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={handleSearch}>Search</button>
        </div>
        <div className="search m-4 p-4 flex items-center mr-5 ">
          <label>UserName :   </label>
          <input className="border border-black p-2 ml-5"
          value={loggedInUser}
           on onChange={(e)=> setUserName(e.target.value)} />
          <button className=" m-5 px-4 py-2 bg-gray-100 rounded-lg " onClick={handleTopRated}>
          Top Rated Restaurants
        </button>   
        </div>
     
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link 
          key={restaurant?.info?.id}
           to={"/restaurants/"+restaurant.info.id}>
            {restaurant.info.promoted ?(
              <RestaurantCardPromoted resData={restaurant}/>
            ):(
              <RestaurantCard resData={restaurant}/>
            )}
          
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
