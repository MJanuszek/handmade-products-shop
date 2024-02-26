import React from "react";
import "../style/Home.scss";
import Navigation from "./Navigation";
import Footer from "./Footer";
import LatestProducts from "./LatestProducts";
import About from "./About";
import Header from "./Header";
import HomePageGallery from "./HomePageGallery";

function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <LatestProducts />
      <About />
      <HomePageGallery />
      <About />
      <Footer />
    </>
  );
}

export default Home;
