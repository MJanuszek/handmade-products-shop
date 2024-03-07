import { useBasket } from "./BasketContext";

function Basket() {
  const { basketItems } = useBasket();
  function handleDisplayBasket() {
    console.log("basket");
    // {
    //   basketItems.map((item, index) => (
    //     <div key={index}>
    //       <h2>{item.name}</h2>
    //       <p>{item.price} PLN</p>
    //     </div>
    //   ));
    // }
  }
  return <div className="basket" onClick={handleDisplayBasket}></div>;
}

export default Basket;
