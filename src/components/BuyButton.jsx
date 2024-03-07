import React from "react";
import { useBasket } from "./BasketContext";

function BuyButton({ product }) {
  const { addToBasket } = useBasket();
  return (
    <button className="buy-btn" onClick={() => addToBasket(product)}>
      Add to basket
    </button>
  );
}

export default BuyButton;
