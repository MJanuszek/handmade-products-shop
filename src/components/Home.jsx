import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import NewestProducts from "./NewestProducts";
import About from "./About";
import Header from "./Header";

function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <NewestProducts />
      <About />
      <Footer />
    </>
  );
}

export default Home;
