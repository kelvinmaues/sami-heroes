import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  Button,
} from "reactstrap";
import { setHero, setViewedHero } from "../../reducers_and_actions/justiceRoom";

const HeroCard = ({ info }) => {
  const dispatch = useDispatch();

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
        <Button
          color="dark"
          size="sm"
          onClick={() => {
            dispatch(setHero(info));
            dispatch(setViewedHero({ id: info.id, name: info.name }));
          }}
        >
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
  info: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.object,
    biography: PropTypes.object,
    work: PropTypes.object,
  }),
};

export default HeroCard;
