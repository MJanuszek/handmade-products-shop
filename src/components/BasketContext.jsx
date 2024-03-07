import React, { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export const useBasket = () => useContext(BasketContext);

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);

  const addToBasket = (product) => {
    if (basketItems.length > 10) {
      alert("Basket cannot have more than 10 items");
    }
    setBasketItems((currentItems) => [...currentItems, product]);
  };

  return (
    <BasketContext.Provider value={{ basketItems, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
