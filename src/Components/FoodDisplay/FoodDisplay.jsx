import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/Fooditem";

export default function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);
  const [sortOrder, setSortOrder] = useState("asc"); // State to manage sort order

  // Function to handle sorting
  const sortedFoodList = food_list
    .filter((item) => category === "All" || category === item.category) // Filter by category
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price; // Sort by ascending price
      } else {
        return b.price - a.price; // Sort by descending price
      }
    });

  // Function to handle dropdown change
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <>
      <div className="sorting">
        <label htmlFor="sort-dropdown">Sort by Price: </label>
        <select
          id="sort-dropdown"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div className="food-display" id="food-display">
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
          {sortedFoodList.map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
