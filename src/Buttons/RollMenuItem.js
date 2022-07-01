import React from "react";
import styled from "styled-components";
import ButtonShell from "./SideMenuButton";
import D20Icon from "../Images/Dice/D20Icon";

const Button = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const ButtonOutline = styled(ButtonShell)`
  top: 75vh;
`;

const DiceIcon = styled(D20Icon)`
  width: 35px;
  position: fixed;
  left: 40px;
  top: 76.1vh;

  @media (max-width: 900px) {
    top: 75.75vh;
  }

  @media (max-width: 600px) {
    top: 76.05vh;
  }
`;

const RollButton = (props) => {
  if (props.active) {
    return (
      <Button>
        <ButtonOutline active={"yes"} />
        <DiceIcon active={"yes"} />
      </Button>
    );
  } else {
    return (
      <Button>
        <ButtonOutline />
        <DiceIcon />
      </Button>
    );
  }
};

export default RollButton;
