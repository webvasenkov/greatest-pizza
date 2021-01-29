import React from "react"
import {BrowserRouter as Router} from "react-router-dom"
import { GlobalStyle } from "./GlobalStyle";
import Hero from "./components/Hero";
import Products from "./components/Products";
import {productData} from "./components/Products/data"
import Feature from "./components/Feature"
import Footer from "./components/Footer"

function App() {
  return (
  <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose pizza favorite" data={productData.pizzas}/>
      <Feature/>
      <Products heading="Sweet Treats for you" data={productData.sweets}/>
      <Footer />
  </Router>
  );
}

export default App;
