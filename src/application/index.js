import React from "react";
// global components
import { Container } from "reactstrap";
// internal components
import {
  HeroList,
  SearchInput,
  LastViewedHeroes,
  ModalHero,
  ErrorAlert,
} from "../components";

const App = () => {
  return (
    <Container className="container mx-auto space-y-6">
      <ModalHero />
      <SearchInput />
      <LastViewedHeroes />
      <ErrorAlert />
      <HeroList />
    </Container>
  );
};

export default App;
