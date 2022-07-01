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
  top: 55vh;

  @media (max-width: 900px) {
    top: 61vh;
  }

  @media (max-width: 600px) {
    top: 57vh;
  }
`;

const StyledDragonIcon = styled(DragonIcon)`
  width: 47px;
  position: fixed;
  left: 33px;
  top: 55.75vh;

  @media (max-width: 900px) {
    top: 61.5vh;
  }

  @media (max-width: 600px) {
    top: 57.75vh;
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
