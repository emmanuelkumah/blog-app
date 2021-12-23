import React from "react";
import Hero from "./Hero";
import { homeHero } from "./Data";

function Home() {
  return (
    <div>
      <Hero {...homeHero} id="hero" />
    </div>
  );
}

export default Home;
