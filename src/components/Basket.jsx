import { useBasket } from "./BasketContext";
import React, { useState } from "react";

function Basket() {
  const [showPopup, setShowPopup] = useState(false);
  const { basketItems } = useBasket();
  function handleDisplayBasket() {
    console.log("basket");
    setShowPopup(!showPopup);
    console.log(showPopup, basketItems);
  }
  return (
    <>
      <div className="basket" onClick={handleDisplayBasket}></div>;
      {showPopup && (
        <div className="popup">
          <div className="basket-items">
            {basketItems.map((item, index) => (
              <div key={index}>
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
