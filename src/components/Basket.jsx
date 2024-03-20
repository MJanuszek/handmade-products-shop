import { useBasket } from "./BasketContext";
import React, { useState, useEffect } from "react";

function Basket() {
  const [showPopup, setShowPopup] = useState(false);
  const { basketItems, clearBasket } = useBasket([]);
  function handleDisplayBasket() {
    if (basketItems.length <= 0) {
      alert("Nothing in basket. Add products");
      return;
    }
    setShowPopup(!showPopup);
  }
  function handleClosePopulBtn() {
    setShowPopup(!showPopup);
  }

  function handleClearBasket() {
    clearBasket();
  }
  // -----------------------
  return (
    <>
      <div className="basket" onClick={handleDisplayBasket}></div>;
      {showPopup && (
        <div className="popup">
          <button className="close-popup-btn" onClick={handleClosePopulBtn}>
            CLOSE BASKET
          </button>
          <button className="clear-basket-btn" onClick={handleClearBasket}>
            Clear basket
          </button>
          <div className="basket-items">
            {basketItems.map((item, index) => (
              <div key={index} className="basket-item">
                <h2>{item.name}</h2>
                <p>{item.price} PLN</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Basket;
