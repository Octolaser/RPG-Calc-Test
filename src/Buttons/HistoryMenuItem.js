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
  top: 65vh;

  @media (max-width: 850px) {
    top: 68vh;
  }

  @media (max-width: 600px) {
    top: 66vh;
  }
`;

const ScrollIcon = styled(Scroll)`
  width: 39px;
  position: fixed;
  left: 39px;
  top: 66.25vh;

  @media (max-width: 900px) {
    top: 69vh;
  }

  @media (max-width: 600px) {
    top: 67.25vh;
    left: 38px;
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
