import React from "react";
// global components
import { Container } from "reactstrap";
// internal components
import { HeroList, SearchInput, LastViewedHeroes } from "../components";

const App = () => {
  return (
    <Container className="container mx-auto space-y-6">
      <SearchInput />
      <LastViewedHeroes />
      <HeroList />
    </Container>
  );
};

export default App;
