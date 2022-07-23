import React from "react";
import styled from "styled-components";

import ButtonShell from "./SideMenuButton";
import Scroll from "../Images/Scroll";

const Button = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const ButtonOutline = styled(ButtonShell)`
  top: 70vh;

  @media (max-width: 850px) {
    top: 73vh;
  }

  @media (max-width: 600px) {
    top: 71vh;
    left: -12px;
  }
`;

const ScrollIcon = styled(Scroll)`
  width: 39px;
  position: fixed;
  left: 39px;
  top: 71.25vh;

  @media (max-width: 900px) {
    top: 74vh;
  }

  @media (max-width: 600px) {
    top: 72.25vh;
    left: 25px;
  }
`;

class HistoryButton extends React.Component {
  render() {
    return (
      <Button>
        <ButtonOutline />
        <ScrollIcon />
      </Button>
    );
  }
}

export default HistoryButton;
