import React from "react";
// components
import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import HeadlineCards from "./componentes/HeadlineCards";
import Food from "./componentes/Food";
import Category from "./componentes/Category";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </>
  );
}

export default App;
