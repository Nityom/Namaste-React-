import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.742030087662197&lng=78.60166244208813&page_type=DESKTOP_WEB_LISTING"
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

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
