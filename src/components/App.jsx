import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BasketProvider } from "./BasketContext.jsx";

import Home from "./Home";
import Products from "./Products";

import Contact from "./Contact";

function App() {
  return (
    <>
      <Router>
        <BasketProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BasketProvider>
      </Router>
    </>
  );
}

export default App;
