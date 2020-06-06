import React from "react";
import { Badge } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
// actions
import { getHero } from "../../reducers_and_actions/justiceRoom";

const LastViewedHeroes = () => {
  const lastHeroes = useSelector((state) => state.justiceRoom.lastViewedHeroes);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row space-x-4">
      {lastHeroes &&
        !!lastHeroes.length &&
        lastHeroes.map((hero) => (
          <Badge
            key={hero.id}
            color="dark"
            className="cursor-pointer"
            onClick={() => dispatch(getHero(hero.id))}
          >
            {hero.name}
          </Badge>
        ))}
    </div>
  );
};

export default LastViewedHeroes;
