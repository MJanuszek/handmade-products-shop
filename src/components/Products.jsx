import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../style/Products.scss";
import BuyButton from "./BuyButton";
import Basket from "./Basket";

const allProducts = [
  {
    name: "This product name",
    price: 122,
    img: "src/assets/products/birgith-roosipuu-k--InFqWwu4-unsplash.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, blanditiis ex. Repellendus atque aspernatur numquam asperiores cum ipsam aliquid ab assumenda ducimus.",
  },
  {
    name: "This product name",
    price: 125,
    img: "src/assets/products/diana-light-u_jt9A7FADk-unsplash.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, blanditiis ex. Repellendus atque aspernatur numquam asperiores cum ipsam aliquid ab assumenda ducimus.",
  },
  {
    name: "This product name",
    price: 312,
    img: "src/assets/products/elena-mozhvilo-lfeSPLBxcKU-unsplash.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, blanditiis ex. Repellendus atque aspernatur numquam asperiores cum ipsam aliquid ab assumenda ducimus.",
  },
  {
    name: "This product name",
    price: 552,
    img: "src/assets/products/stephanie-harvey-rOTq_g9NZmE-unsplash.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, blanditiis ex. Repellendus atque aspernatur numquam asperiores cum ipsam aliquid ab assumenda ducimus.",
  },
  {
    name: "This product name",
    price: 444,
    img: "src/assets/products/nasim-keshmiri-fRsVRJi_Bjg-unsplash.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, blanditiis ex. Repellendus atque aspernatur numquam asperiores cum ipsam aliquid ab assumenda ducimus.",
  },
  {
    name: "This product name",
    price: 444,
    img: "src/assets/products/luisana-galicia-lR2a23wy3PA-unsplash.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, blanditiis ex. Repellendus atque aspernatur numquam asperiores cum ipsam aliquid ab assumenda ducimus.",
  },
];

function Products() {
  return (
    <div className="products-list">
      <Navigation />
      <Basket />
      <div className="available-products">
        {allProducts.map((product, index) => (
          <div className="product" key={index}>
            <div
              className="product-img"
              style={{
                backgroundImage: `url(${product.img})`,
              }}
            ></div>
            <div className="product-info">
              <h1 className="product-title">{product.name}</h1>
              <h2>{product.price} PLN</h2>
              <p className="product-description">{product.description}</p>
              <BuyButton product={product} />
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Products;
