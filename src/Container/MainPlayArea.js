import React from "react";
import styled from "styled-components";
import GridIMG from "../Images/grid.svg";
import DiceRoller from "./Pages/DiceRoller";

const GridBackground = styled.div`
  background-color: rgba(79, 79, 79, 0.5);
  min-height: 75vh;
  height: 100%;
  border: 3px solid #662d91;
`;

const Container = styled.div`
  width: 99vw;
  min-height: 75vh;
  margin-top: 10px;
  background-image: url(${GridIMG});

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const MainPlayContainer = () => {
  return (
    <Container>
      <GridBackground>
        <DiceRoller />
      </GridBackground>
    </Container>
  );
};

export default MainPlayContainer;
