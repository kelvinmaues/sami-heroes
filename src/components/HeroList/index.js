import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CardColumns } from "reactstrap";
// internal components
import HeroCard from "../HeroCard";
// actions
import { searchHeroByName } from "../../application/redux-duck";

const HeroList = () => {
  const heroes = useSelector((state) => state.justiceRoom.heroes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchHeroByName());
  }, [dispatch]);

  const heroesCardList = !!heroes.length
    ? heroes.map((heroObj) => <HeroCard key={heroObj.id} info={heroObj} />)
    : null;

  return (
    <CardColumns>{heroesCardList}</CardColumns>
  );
};

export default HeroList;
