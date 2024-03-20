import { useBasket } from "./BasketContext";
import React, { useState, useEffect } from "react";

function Basket() {
  const [showPopup, setShowPopup] = useState(false);
  const { basketItems } = useBasket([]);
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

  // -----------------------
  return (
    <>
      <div className="basket" onClick={handleDisplayBasket}></div>;
      {showPopup && (
        <div className="popup">
          <button className="close-popup-btn" onClick={handleClosePopulBtn}>
            CLOSE BASKET
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
