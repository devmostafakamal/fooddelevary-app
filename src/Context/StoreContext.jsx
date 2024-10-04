import { createContext, useEffect, useState } from "react";
import { food_list } from "../../public/assets/Food Del Frontend Assets/assets/assets";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalAmount = () => {
    let totalAmount = 0;

    // Loop over the keys of the cartItems object (item IDs)
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        // Check if the quantity is greater than 0
        // Find the item info in the food_list based on the ID
        let itemInfo = food_list.find((product) => product._id === itemId);

        if (itemInfo) {
          // Add the total for each item (price * quantity)
          totalAmount += itemInfo.price * cartItems[itemId];
        }
      }
    }

    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
