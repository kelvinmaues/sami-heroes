/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Progress,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";
// actions
import { setHero } from "../../reducers_and_actions/justiceRoom";

const ModalHero = () => {
  const theHero = useSelector((state) => state.justiceRoom.hero);
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(!!theHero);
  }, [theHero]);

  const toggle = () => {
    setModal(!modal);
    dispatch(setHero(null));
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle} />
      <ModalBody className="flex flex-col items-center space-y-6">
        <img
          className="w-40 h-40 rounded-full shadow-md"
          src={theHero && theHero.image.url}
          alt="Avatar of Jonathan Reinink"
        />
        <div className="text-center">
          <h4>{theHero && theHero.name}</h4>
          {theHero && theHero.biography["full-name"] && (
            <h6>{theHero.biography["full-name"]}</h6>
          )}
        </div>
        <ListGroup className="w-full">
          <ListGroupItem>
            <ListGroupItemHeading>Trabalho</ListGroupItemHeading>
            <ListGroupItemText>
              {`${theHero && theHero.work.base}, ${
                theHero && theHero.work.occupation
              }`}
            </ListGroupItemText>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>Universo</ListGroupItemHeading>
            <ListGroupItemText>
              {theHero && theHero.biography.publisher}
            </ListGroupItemText>
          </ListGroupItem>
        </ListGroup>
        {theHero && (
          <div className="w-full">
            <div className="text-center font-bold">Super Poderes</div>
            <Progress multi>
              <Progress animated bar value={theHero.powerstats.combat}>
                🥊
              </Progress>
              <Progress
                animated
                bar
                color="success"
                value={theHero.powerstats.intelligence}
              >
                🧠
              </Progress>
              <Progress
                animated
                bar
                color="info"
                value={theHero.powerstats.power}
              >
                ⚡️
              </Progress>
              <Progress
                animated
                bar
                color="danger"
                value={theHero.powerstats.speed}
              >
                🏃
              </Progress>
              <Progress
                animated
                bar
                color="warning"
                value={theHero.powerstats.strength}
              >
                💪
              </Progress>
            </Progress>
          </div>
        )}
      </ModalBody>
    </Modal>
  );
};

export default ModalHero;
