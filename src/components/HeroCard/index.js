import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  Button,
} from "reactstrap";

const HeroCard = ({ info }) => {
  const { image, name, biography, work } = info;
  return (
    <Card className="max-w-sm rounded overflow-hidden transition duration-500 rounded-lg ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
      <CardImg className="w-full" top src={image.url} alt={name} />
      <CardBody className="px-6 py-4">
        <CardTitle className="font-bold text-xl mb-2">{name}</CardTitle>
        {biography["full-name"] && (
          <CardSubtitle>{biography["full-name"]}</CardSubtitle>
        )}
        {work.occupation && (
          <CardText className="text-gray-700 text-base">
            {work.occupation}
          </CardText>
        )}
        <Button color="dark" size="sm">
          Ver Perfil
        </Button>
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
