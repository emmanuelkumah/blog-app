import React from "react";
import Hero from "./Hero";
import { homeHero } from "./Data";
import Features from "./Features";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Hero {...homeHero} id="hero" />
      <Features id="features" />
      <Footer id="footer" />
    </div>
  );
}

export default Home;
