import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import NewestProducts from "./NewestProducts";
import About from "./About";

function Home() {
  return (
    <>
      <Navigation />
      <NewestProducts />
      <About />
      <Footer />
    </>
  );
}

export default Home;
