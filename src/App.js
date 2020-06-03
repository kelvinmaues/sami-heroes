import React from "react";
import { Container } from "@material-ui/core";
// global components
import { NavBar, HeroCard } from "./components";

const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </Container>
    </>
  );
};

export default App;
