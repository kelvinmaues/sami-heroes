import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { CardColumns } from "reactstrap";
// internal components
import HeroCard from "../HeroCard";
// actions
import { searchHeroByName } from "../../reducers_and_actions/justiceRoom";

const HeroList = () => {
  const heroes = useSelector((state) => state.justiceRoom.heroes);
  const isLoading = useSelector((state) => state.request.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchHeroByName());
  }, [dispatch]);

  const heroesCardList = !!heroes.length
    ? heroes.map((heroObj) => <HeroCard key={heroObj.id} info={heroObj} />)
    : null;

  return (
    <CardColumns>
      {!isLoading ? heroesCardList : <Skeleton count={10} height={450} width={300} />}
    </CardColumns>
  );
};

export default HeroList;
