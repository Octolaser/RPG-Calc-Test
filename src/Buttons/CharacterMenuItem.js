import React from "react";
import styled from "styled-components";
import ButtonShell from "./SideMenuButton";
import DragonIcon from "../Images/DragonIcon";

const Button = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const ButtonOutline = styled(ButtonShell)`
  top: 60vh;

  @media (max-width: 900px) {
    top: 66vh;
  }

  @media (max-width: 600px) {
    top: 62vh;
    left: -12px;
  }
`;

const StyledDragonIcon = styled(DragonIcon)`
  width: 47px;
  position: fixed;
  left: 33px;
  top: 60.75vh;

  @media (max-width: 900px) {
    top: 66.5vh;
  }

  @media (max-width: 600px) {
    top: 62.75vh;
    left: 21px;
  }
`;

class CharacterMenu extends React.Component {
  render() {
    return (
      <Button>
        <ButtonOutline />
        <StyledDragonIcon />
      </Button>
    );
  }
}

export default CharacterMenu;
