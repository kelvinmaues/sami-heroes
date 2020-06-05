import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardImg } from "reactstrap";

const HeroCard = ({ info }) => {
  const { image, name, biography, work } = info;
  return (
    <Card
      className="flex transition duration-500 rounded-lg ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 ..."
      style={{ width: "300px", height: "150px" }}
    >
      <CardImg
        className="rounded-l-lg"
        width="40%"
        src={image.url}
        alt={name}
      />
      <CardBody className="flex flex-col">
        <p className="text-xl font-extrabold">{name}</p>
        <p className="text-sm font-light">{biography["full-name"] || "---"}</p>
        <p className="">{work.occupation}</p>
      </CardBody>
    </Card>
  );
};

HeroCard.defaultProps = {
  info: {},
};

HeroCard.propTypes = {
  info: PropTypes.objectOf(PropTypes.object),
};

export default HeroCard;
