import React from "react";
// global components
import { Container } from "reactstrap";
// internal components
import { HeroList } from "../components";

const App = () => {
  return (
    <Container fluid>
      <HeroList />
    </Container>
  );
};

export default App;
