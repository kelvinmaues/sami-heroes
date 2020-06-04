import React from "react";
// global components
import { NavBar, HeroCard } from "./components";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container px-6 h-screen flex content-start justify-between flex-wrap">
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </div>
    </>
  );
};

export default App;
