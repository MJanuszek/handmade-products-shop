import React from "react";
import "../style/LatestProducts.scss";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";

const imgToSlide = [
  {
    url: "src/assets/annie-spratt-TywjkDHf0Ps-unsplash.jpg",
  },
  {
    url: "src/assets/dan-farrell-fT49QnFucQ8-unsplash.jpg",
  },
  {
    url: "src/assets/jonathan-borba-Yod824b0KDA-unsplash.jpg",
  },
];

function LatestProducts() {
  return (
    <div className="newest-products">
      <Slide>
        {imgToSlide.map((img, index) => (
          <div
            key={index}
            className="each-slide"
            style={{
              backgroundImage: `url(${img.url})`,
            }}
          ></div>
        ))}
      </Slide>

      <Link className="see-products-btn" to={"/products"}>
        See our latest products!
      </Link>
      {/* <button className="see-products-btn">See our latest products!</button> */}
    </div>
  );
}

export default LatestProducts;
